// Business Intelligence Dashboard Application
class BIDashboard {
    constructor() {
        // Sample data loaded from Excel
        this.data = [
            {"FY":"FY25","Type Opp":"RFP","Title":"USA","Opp ID":"CQBV6001","Customer":"AMAT","Stage":"Canceled","Industry":"CMT","Estimated Revenue":300000,"Technology":"Custom","Type of Deal":"SI"},
            {"FY":"FY25","Type Opp":"RFP","Title":"USA","Opp ID":"Pending","Customer":"GE Health Care","Stage":"Canceled","Industry":"CMT","Estimated Revenue":300000,"Technology":"Oracle;#Custom","Type of Deal":"AMS"},
            {"FY":"FY25","Type Opp":"RFP","Title":"USA","Opp ID":"12039755","Customer":"Ingredion","Stage":"Won","Industry":"RES","Estimated Revenue":450000,"Technology":"SAP","Type of Deal":"AMS"},
            {"FY":"FY25","Type Opp":"RFI","Title":"USA","Opp ID":"12298653","Customer":"Raymond James","Stage":"Canceled","Industry":"FS","Estimated Revenue":500000,"Technology":"Custom","Type of Deal":"AMS"},
            {"FY":"FY25","Type Opp":"RFP","Title":"USA","Opp ID":"Pending","Customer":"Vantive","Stage":"Canceled","Industry":"HPS","Estimated Revenue":0,"Technology":"Custom","Type of Deal":"AMS"},
            {"FY":"FY25","Type Opp":"RFP","Title":"USA","Opp ID":"12326754","Customer":"Entain","Stage":"0A","Industry":"CMT","Estimated Revenue":5000000,"Technology":"Custom;#Data&AI","Type of Deal":"SI"},
            {"FY":"FY25","Type Opp":"RFP","Title":"USA","Opp ID":"Pending","Customer":"Entain","Stage":"0A","Industry":"CMT","Estimated Revenue":3000000,"Technology":"Custom;#Data&AI","Type of Deal":"SI"},
            {"FY":"FY25","Type Opp":"RFP","Title":"USA","Opp ID":"Pending","Customer":"Vantive","Stage":"0A","Industry":"HPS","Estimated Revenue":300000000,"Technology":"Custom;#Data&AI","Type of Deal":"SI"},
            {"FY":"FY25","Type Opp":"RFP","Title":"USA","Opp ID":"12476321","Customer":"Bristol Myers","Stage":"1","Industry":"HPS","Estimated Revenue":900000,"Technology":"Data&AI;#Custom","Type of Deal":"SI"},
            {"FY":"FY25","Type Opp":"RFP","Title":"USA","Opp ID":"Pending","Customer":"Nestle","Stage":"1","Industry":"CMT","Estimated Revenue":2000000,"Technology":"Custom","Type of Deal":"SI"},
            {"FY":"FY26","Type Opp":"RFP","Title":"UK","Opp ID":"12765432","Customer":"BP","Stage":"2B","Industry":"RES","Estimated Revenue":1200000,"Technology":"Oracle","Type of Deal":"SI"},
            {"FY":"FY26","Type Opp":"RFI","Title":"UK","Opp ID":"12765433","Customer":"Rolls Royce","Stage":"Canceled","Industry":"PRD","Estimated Revenue":800000,"Technology":"Custom","Type of Deal":"AMS"},
            {"FY":"FY25","Type Opp":"RFP","Title":"DE","Opp ID":"12854321","Customer":"Siemens","Stage":"Canceled","Industry":"CMT","Estimated Revenue":1500000,"Technology":"Custom","Type of Deal":"SI"}
        ];

        this.filteredData = [...this.data];
        this.currentPage = 1;
        this.pageSize = 10;
        this.sortColumn = '';
        this.sortDirection = 'asc';
        this.charts = {};

        this.init();
    }

    init() {
        this.setupNavigation();
        this.setupFilters();
        this.setupCharts();
        this.setupTable();
        this.setupFileUpload();
        this.setupForm();
        this.updateDashboard();
    }

    setupNavigation() {
        const navLinks = document.querySelectorAll('.nav-link');
        const heroButtons = document.querySelectorAll('[data-page]');
        const navToggle = document.getElementById('navToggle');
        const navMenu = document.getElementById('navMenu');

        [...navLinks, ...heroButtons].forEach(link => {
            link.addEventListener('click', e => {
                e.preventDefault();
                const page = link.getAttribute('data-page');
                this.showPage(page);
                navLinks.forEach(n => n.classList.remove('active'));
                const active = document.querySelector(`.nav-link[data-page="${page}"]`);
                if(active) active.classList.add('active');
                navMenu.classList.remove('active');
            });
        });

        if(navToggle) {
            navToggle.addEventListener('click', () => {
                navMenu.classList.toggle('active');
            });
        }
    }

    showPage(pageId) {
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        const target = document.getElementById(pageId);
        if(target) {
            target.classList.add('active');
            if(pageId==='dashboard') setTimeout(()=>this.updateCharts(),100);
        }
    }

    setupFilters() {
        ['countryFilter','industryFilter','stageFilter','fyFilter'].forEach(id=>{
            const el = document.getElementById(id);
            if(el) el.addEventListener('change',()=>this.applyFilters());
        });
        const clear = document.getElementById('clearFilters');
        if(clear) clear.addEventListener('click',()=>this.clearFilters());
    }

    applyFilters() {
        const c = document.getElementById('countryFilter').value;
        const i = document.getElementById('industryFilter').value;
        const s = document.getElementById('stageFilter').value;
        const f = document.getElementById('fyFilter').value;
        this.filteredData = this.data.filter(item=>
            (!c||item.Title===c)&&
            (!i||item.Industry===i)&&
            (!s||item.Stage===s)&&
            (!f||item.FY===f)
        );
        this.currentPage=1;
        this.updateDashboard();
    }

    clearFilters() {
        ['countryFilter','industryFilter','stageFilter','fyFilter'].forEach(id=>document.getElementById(id).value='');
        this.filteredData=[...this.data];
        this.currentPage=1;
        this.updateDashboard();
    }

    updateDashboard() {
        this.updateKPIs();
        this.updateCharts();
        this.updateTable();
    }

    updateKPIs() {
        const total = this.filteredData.length;
        const revenueSum = this.filteredData.reduce((sum,i)=>sum+(i['Estimated Revenue']||0),0);
        const avg = total>0?revenueSum/total:0;
        const wonCount = this.filteredData.filter(i=>i.Stage==='Won').length;
        const winRate = total>0?(wonCount/total)*100:0;
        document.getElementById('totalOpportunities').textContent=total;
        document.getElementById('totalRevenue').textContent=this.formatCurrency(revenueSum);
        document.getElementById('avgRevenue').textContent=this.formatCurrency(avg);
        document.getElementById('winRate').textContent=winRate.toFixed(1)+'%';
    }

    formatCurrency(val) {
        if(val>=1e9) return '$'+(val/1e9).toFixed(1)+'B';
        if(val>=1e6) return '$'+(val/1e6).toFixed(1)+'M';
        if(val>=1e3) return '$'+(val/1e3).toFixed(0)+'K';
        return '$'+val.toFixed(0);
    }

    setupCharts() {
        this.setupIndustryChart();
        this.setupStageChart();
        this.setupRevenueChart();
        this.setupWorldMap();
    }

    setupIndustryChart() {
        const ctx = document.getElementById('industryChart');
        if(!ctx) return;
        this.charts.industry = new Chart(ctx,{type:'bar',data:{labels:[],datasets:[{label:'Oportunidades',data:[],backgroundColor:['#667eea','#764ba2','#f093fb','#f5576c','#4facfe'],borderWidth:2}]},options:{responsive:true,maintainAspectRatio:false,onClick:(e,els)=>{if(els.length){const idx=els[0].index;document.getElementById('industryFilter').value=this.charts.industry.data.labels[idx];this.applyFilters();}},plugins:{legend:{display:false},tooltip:{callbacks:{afterLabel:ctx=>`Receita: ${this.formatCurrency(this.filteredData.filter(i=>i.Industry===ctx.label).reduce((s,i)=>s+(i['Estimated Revenue']||0),0))}`}}},scales:{y:{beginAtZero:true,ticks:{precision:0}}}}});
    }

    setupStageChart() {
        const ctx = document.getElementById('stageChart');
        if(!ctx) return;
        this.charts.stage = new Chart(ctx,{type:'doughnut',data:{labels:[],datasets:[{data:[],backgroundColor:['#ff6b6b','#4ecdc4','#45b7d1','#96ceb4','#feca57','#ff9ff3'],borderWidth:2,borderColor:'#fff'}]},options:{responsive:true,maintainAspectRatio:false,onClick:(e,els)=>{if(els.length){const idx=els[0].index;document.getElementById('stageFilter').value=this.charts.stage.data.labels[idx];this.applyFilters();}},plugins:{legend:{position:'bottom',labels:{usePointStyle:true}},tooltip:{callbacks:{afterLabel:ctx=>`Receita: ${this.formatCurrency(this.filteredData.filter(i=>i.Stage===ctx.label).reduce((s,i)=>s+(i['Estimated Revenue']||0),0))}`}}}}});
    }

    setupRevenueChart() {
        const ctx = document.getElementById('revenueChart');
        if(!ctx) return;
        this.charts.revenue = new Chart(ctx,{type:'line',data:{labels:['FY25','FY26'],datasets:[{label:'Receita por Ano Fiscal',data:[],borderColor:'#667eea',backgroundColor:'rgba(102,126,234,0.1)',fill:true,tension:0.4}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{position:'top'},tooltip:{callbacks:{label:ctx=>`${ctx.dataset.label}: ${this.formatCurrency(ctx.raw)}`}}},scales:{y:{beginAtZero:true,ticks:{callback:v=>this.formatCurrency(v)}}}}});
    }

    setupWorldMap() {
        const c=document.getElementById('worldMap');
        if(!c) return;
        c.innerHTML=`<div style="text-align:center;color:#4a5568;"><h4>Distribuição por País</h4><div style="display:flex;gap:20px;justify-content:center;"><div data-country="USA" class="country-card" style="cursor:pointer;"><span style="font-size:2rem;">🇺🇸</span><div id="usa-count" style="font-weight:700;color:#667eea;"></div></div><div data-country="UK" class="country-card" style="cursor:pointer;"><span style="font-size:2rem;">🇬🇧</span><div id="uk-count" style="font-weight:700;color:#667eea;"></div></div><div data-country="DE" class="country-card" style="cursor:pointer;"><span style="font-size:2rem;">🇩🇪</span><div id="de-count" style="font-weight:700;color:#667eea;"></div></div></div></div>`;
        document.querySelectorAll('.country-card').forEach(el=>{
            el.addEventListener('click',()=>{document.getElementById('countryFilter').value=el.getAttribute('data-country');this.applyFilters();});
        });
    }

    updateCharts() {
        this.updateIndustryChart();
        this.updateStageChart();
        this.updateRevenueChart();
        this.updateWorldMap();
    }

    updateIndustryChart() {
        if(!this.charts.industry) return;
        const d={};
        this.filteredData.forEach(i=>d[i.Industry]=(d[i.Industry]||0)+1);
        this.charts.industry.data.labels=Object.keys(d);
        this.charts.industry.data.datasets[0].data=Object.values(d);
        this.charts.industry.update();
    }

    updateStageChart() {
        if(!this.charts.stage) return;
        const d={};
        this.filteredData.forEach(i=>d[i.Stage]=(d[i.Stage]||0)+1);
        this.charts.stage.data.labels=Object.keys(d);
        this.charts.stage.data.datasets[0].data=Object.values(d);
        this.charts.stage.update();
    }

    updateRevenueChart() {
        if(!this.charts.revenue) return;
        const d={'FY25':0,'FY26':0};
        this.filteredData.forEach(i=>{if(d[i.FY]!=undefined) d[i.FY]+=i['Estimated Revenue'];});
        this.charts.revenue.data.datasets[0].data=[d.FY25,d.FY26];
        this.charts.revenue.update();
    }

    updateWorldMap() {
        const d={};
        this.filteredData.forEach(i=>d[i.Title]=(d[i.Title]||0)+1);
        document.getElementById('usa-count').textContent=d.USA||0;
        document.getElementById('uk-count').textContent=d.UK||0;
        document.getElementById('de-count').textContent=d.DE||0;
    }

    setupTable() {
        const s=document.getElementById('tableSearch'),e=document.getElementById('exportData');
        document.getElementById('prevPage').addEventListener('click',()=>{
            if(this.currentPage>1){this.currentPage--;this.updateTable();}
        });
        document.getElementById('nextPage').addEventListener('click',()=>{
            if(this.currentPage<Math.ceil(this.filteredData.length/this.pageSize)){this.currentPage++;this.updateTable();}
        });
        s.addEventListener('input',e=>{this.searchTable(e.target.value);});
        e.addEventListener('click',()=>this.exportToCSV());
        document.querySelectorAll('[data-sort]').forEach(h=>{
            h.addEventListener('click',()=>this.sortTable(h.getAttribute('data-sort')));
        });
    }

    searchTable(term) {
        this.filteredData = !term? [...this.data] : this.data.filter(i=>
            Object.values(i).some(v=>v.toString().toLowerCase().includes(term.toLowerCase()))
        );
        this.currentPage=1;
        this.updateDashboard();
    }

    sortTable(col) {
        this.sortDirection = this.sortColumn===col? (this.sortDirection==='asc'?'desc':'asc') : 'asc';
        this.sortColumn=col;
        this.filteredData.sort((a,b)=> {
            let av=a[col]||'', bv=b[col]||'';
            av=av.toString().toLowerCase(); bv=bv.toString().toLowerCase();
            return this.sortDirection==='asc'? av.localeCompare(bv): bv.localeCompare(av);
        });
        this.currentPage=1;
        this.updateTable();
    }

    updateTable() {
        const tb=document.getElementById('tableBody'); if(!tb) return;
        const start=(this.currentPage-1)*this.pageSize, end=start+this.pageSize;
        const pageData=this.filteredData.slice(start,end);
        tb.innerHTML=pageData.map(i=>`<tr>
            <td>${i.Customer}</td><td>${i.Title}</td><td>${i.Industry}</td>
            <td><span class="stage-badge stage-${i.Stage.toLowerCase()}">${i.Stage}</span></td>
            <td>${this.formatCurrency(i['Estimated Revenue'])}</td><td>${i.Technology}</td>
            <td>${i['Type of Deal']}</td>
        </tr>`).join('');
        document.getElementById('showingStart').textContent=start+1;
        document.getElementById('showingEnd').textContent=Math.min(end,this.filteredData.length);
        document.getElementById('totalRecords').textContent=this.filteredData.length;
        document.getElementById('pageInfo').textContent=`Página ${this.currentPage} de ${Math.ceil(this.filteredData.length/this.pageSize)}`;
        document.getElementById('prevPage').disabled=this.currentPage<=1;
        document.getElementById('nextPage').disabled=this.currentPage>=Math.ceil(this.filteredData.length/this.pageSize);
    }

    exportToCSV() {
        const hdr=['Customer','Title','Industry','Stage','Estimated Revenue','Technology','Type of Deal'];
        const rows=this.filteredData.map(i=>[i.Customer,i.Title,i.Industry,i.Stage,i['Estimated Revenue'],i.Technology,i['Type of Deal']]);
        const csv=[hdr.join(','),...rows.map(r=>r.map(v=>`"${v}"`).join(','))].join('\n');
        const blob=new Blob([csv],{type:'text/csv'}),url=URL.createObjectURL(blob);
        const a=document.createElement('a'); a.href=url;a.download='dashboard-data.csv';a.click();
        URL.revokeObjectURL(url);
    }

    setupFileUpload() {
        const ua=document.getElementById('uploadArea'),fi=document.getElementById('fileInput'),sb=document.getElementById('selectFile');
        sb.addEventListener('click',()=>fi.click());
        fi.addEventListener('change',e=>this.processFile(e.target.files[0]));
        ua.addEventListener('dragover',e=>{e.preventDefault();ua.classList.add('dragover');});
        ua.addEventListener('dragleave',()=>ua.classList.remove('dragover'));
        ua.addEventListener('drop',e=>{e.preventDefault();ua.classList.remove('dragover');const f=e.dataTransfer.files[0];if(f) this.processFile(f);});
    }

    processFile(f) {
        const bar=document.getElementById('uploadProgress'), fill=document.getElementById('progressFill'), txt=document.getElementById('progressText');
        bar.style.display='block';fill.style.width='0%';txt.textContent='Processando arquivo...';
        let p=0,iv=setInterval(()=>{
            p+=10;fill.style.width=p+'%';
            if(p>=100){clearInterval(iv);txt.textContent='Arquivo processado!';setTimeout(()=>{bar.style.display='none';alert('Excel carregado (demo)');},500);}
        },100);
    }

    setupForm() {
        const f=document.getElementById('dataEntryForm'),r=document.getElementById('resetForm');
        f.addEventListener('submit',e=>{e.preventDefault();this.handleForm(f);});
        r.addEventListener('click',()=>f.reset());
    }

    handleForm(f) {
        const fd=new FormData(f),nr={};
        fd.forEach((v,k)=>nr[k]=v);
        nr['Estimated Revenue']=parseInt(nr['Estimated Revenue'])||0;
        this.data.push(nr);this.filteredData=[...this.data];
        f.reset();this.updateDashboard();alert('Dados adicionados!');this.showPage('dashboard');
        document.querySelectorAll('.nav-link').forEach(n=>n.classList.remove('active'));
        document.querySelector('.nav-link[data-page="dashboard"]').classList.add('active');
    }
}

document.addEventListener('DOMContentLoaded',()=>new BIDashboard());

// Stage badge styles
const s=document.createElement('style');
s.textContent=`
.stage-badge{padding:4px 8px;border-radius:4px;font-size:0.75rem;font-weight:600;text-transform:uppercase;}
.stage-won{background:#d4edda;color:#155724;}
.stage-canceled{background:#f8d7da;color:#721c24;}
.stage-0a{background:#fff3cd;color:#856404;}
.stage-1{background:#cce5ff;color:#004085;}
.stage-2b{background:#e2e3e5;color:#41464b;}
`;
document.head.appendChild(s);
