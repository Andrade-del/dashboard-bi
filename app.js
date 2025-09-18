// Business Intelligence Dashboard Application
class BIDashboard {
    constructor() {
        // Sample data from Excel file
        this.data = [
            {"FY": "FY25", "Type Opp": "RFP", "Title": "USA", "Opp ID": "CQBV6001", "Customer": "AMAT", "Stage": "Canceled", "Folder": "FY25M06 - AMAT - Squad Custom", "Industry": "CMT", "Estimated Amount": "USD 300k", "Estimated Revenue": 300000, "Pricing Model": "Fixed Price, Fixed Scope", "Invoice": "USA", "CCI": null, "SLA": null, "Input": "Cesar Prado", "Involved": "Sanjay Chauhan; Rohan Kamat; Fernanda Lima; Andrea Coco; Rodrigo Lopes", "BD": "Yes", "Description": "Delivered", "Type of Deal": "SI", "Technology": "Custom", "Item Type": "Item", "Path": "sites/SolutionEfficiencyAA/Lists/Controle America Corridors"},
            {"FY": "FY25", "Type Opp": "RFP", "Title": "USA", "Opp ID": "Pending", "Customer": "GE Health Care", "Stage": "Canceled", "Folder": "FY25M06 - GEHC - Squad Analyze", "Industry": "CMT", "Estimated Amount": "USD 300k", "Estimated Revenue": 300000, "Pricing Model": "Fixed Price, Fixed Scope", "Invoice": "USA", "CCI": null, "SLA": null, "Input": "Cesar Prado", "Involved": "Jerry Garcia; Sanjay Chauhan; Alex Morril; Andrea Coco; Fernanda Lima", "BD": "Yes", "Description": "Shared DNP\nAsked detail about Oracle roles\nAsked confirmation regarding PT and/or EN", "Type of Deal": "AMS", "Technology": "Oracle;#Custom", "Item Type": "Item", "Path": "sites/SolutionEfficiencyAA/Lists/Controle America Corridors"},
            {"FY": "FY25", "Type Opp": "RFP", "Title": "USA", "Opp ID": "12039755", "Customer": "Ingredion", "Stage": "Won", "Folder": "FY25M06 - Ingredion - Rate SAP", "Industry": "RES", "Estimated Amount": "USD 450k", "Estimated Revenue": 450000, "Pricing Model": "Fixed Price, Fixed Scope", "Invoice": "USA", "CCI": null, "SLA": null, "Input": "Cesar Prado", "Involved": "Viral Shah; Venkata Srinivasa Nunnca; Amit Bathnagar; Andre Fiorilli;", "BD": "Yes", "Description": "Delivered", "Type of Deal": "AMS", "Technology": "SAP", "Item Type": "Item", "Path": "sites/SolutionEfficiencyAA/Lists/Controle America Corridors"},
            {"FY": "FY25", "Type Opp": "RFI", "Title": "USA", "Opp ID": "12298653", "Customer": "Raymond James", "Stage": "Canceled", "Folder": "FY25M06 - Raymond James - Squad", "Industry": "FS", "Estimated Amount": "USD 500k", "Estimated Revenue": 500000, "Pricing Model": "Fixed Price, Fixed Scope", "Invoice": "USA", "CCI": null, "SLA": null, "Input": "Cesar Prado", "Involved": "Anand Sekaran; Michael Riechers; Vivek Mullick", "BD": "Yes", "Description": "Shared staffing assuming 100% English\nExplained our onsight/offshore distribution for Business Analysts", "Type of Deal": "AMS", "Technology": "Custom", "Item Type": "Item", "Path": "sites/SolutionEfficiencyAA/Lists/Controle America Corridors"},
            {"FY": "FY25", "Type Opp": "RFP", "Title": "USA", "Opp ID": "Pending", "Customer": "Vantive", "Stage": "Canceled", "Folder": "FY25M06 - Vantive - Propection", "Industry": "HPS", "Estimated Amount": "Not informed", "Estimated Revenue": 0, "Pricing Model": "Time & Material", "Invoice": "USA", "CCI": null, "SLA": null, "Input": "Cesar Prado", "Involved": "From Argentina", "BD": "No", "Description": "Suspended", "Type of Deal": "AMS", "Technology": "Custom", "Item Type": "Item", "Path": "sites/SolutionEfficiencyAA/Lists/Controle America Corridors"},
            {"FY": "FY25", "Type Opp": "RFP", "Title": "USA", "Opp ID": "12326754", "Customer": "Entain", "Stage": "0A", "Folder": "FY25M07 - Entain - Analyze Incident", "Industry": "CMT", "Estimated Amount": "USD 5M", "Estimated Revenue": 5000000, "Pricing Model": "Time & Material", "Invoice": "USA", "CCI": 0.35, "SLA": null, "Input": "Cesar Prado", "Involved": "James Freeman; Andy Emmett; Daniel Maraccini; Rodrigo Lopes", "BD": "Yes", "Description": "Shared proposal 2 times\nExplained rates consideration", "Type of Deal": "SI", "Technology": "Custom;#Data&AI", "Item Type": "Item", "Path": "sites/SolutionEfficiencyAA/Lists/Controle America Corridors"},
            {"FY": "FY25", "Type Opp": "RFP", "Title": "USA", "Opp ID": "Pending", "Customer": "Entain", "Stage": "0A", "Folder": "FY25M07 - Entain - Support Analyze", "Industry": "CMT", "Estimated Amount": "USD 3M", "Estimated Revenue": 3000000, "Pricing Model": "Time & Material", "Invoice": "USA", "CCI": 0.35, "SLA": null, "Input": "Cesar Prado", "Involved": "James Freeman; Andy Emmett; Daniel Maraccini; Rodrigo Lopes", "BD": "Yes", "Description": "Shared proposal 2 times\nExplained rates consideration", "Type of Deal": "SI", "Technology": "Custom;#Data&AI", "Item Type": "Item", "Path": "sites/SolutionEfficiencyAA/Lists/Controle America Corridors"},
            {"FY": "FY25", "Type Opp": "RFP", "Title": "USA", "Opp ID": "Pending", "Customer": "Vantive", "Stage": "0A", "Folder": "FY25M08 - Vantive - Migration Gen", "Industry": "HPS", "Estimated Amount": "USD 300M", "Estimated Revenue": 300000000, "Pricing Model": "Fixed Price, Fixed Scope", "Invoice": "USA", "CCI": null, "SLA": null, "Input": "Cesar Prado", "Involved": null, "BD": "No", "Description": "Big project shared details", "Type of Deal": "SI", "Technology": "Custom;#Data&AI", "Item Type": "Item", "Path": "sites/SolutionEfficiencyAA/Lists/Controle America Corridors"},
            {"FY": "FY25", "Type Opp": "RFP", "Title": "USA", "Opp ID": "12476321", "Customer": "Bristol Myers", "Stage": "1", "Folder": "FY25M08 - Bristol Myers - Rate SAP", "Industry": "HPS", "Estimated Amount": "USD 900k", "Estimated Revenue": 900000, "Pricing Model": "Fixed Price, Fixed Scope", "Invoice": "USA", "CCI": null, "SLA": null, "Input": "Cesar Prado", "Involved": null, "BD": "Yes", "Description": "Shared rates", "Type of Deal": "SI", "Technology": "Data&AI;#Custom", "Item Type": "Item", "Path": "sites/SolutionEfficiencyAA/Lists/Controle America Corridors"},
            {"FY": "FY25", "Type Opp": "RFP", "Title": "USA", "Opp ID": "Pending", "Customer": "Nestle", "Stage": "1", "Folder": "FY25M08 - Nestle - Support Analyze", "Industry": "CMT", "Estimated Amount": "USD 2M", "Estimated Revenue": 2000000, "Pricing Model": "Time & Material", "Invoice": "USA", "CCI": null, "SLA": null, "Input": "Cesar Prado", "Involved": null, "BD": "Yes", "Description": "In progress", "Type of Deal": "SI", "Technology": "Custom", "Item Type": "Item", "Path": "sites/SolutionEfficiencyAA/Lists/Controle America Corridors"},
            {"FY": "FY26", "Type Opp": "RFP", "Title": "UK", "Opp ID": "12765432", "Customer": "BP", "Stage": "2B", "Folder": "FY26M01 - BP - Energy Analytics", "Industry": "RES", "Estimated Amount": "USD 1.2M", "Estimated Revenue": 1200000, "Pricing Model": "Fixed Price, Fixed Scope", "Invoice": "UK", "CCI": null, "SLA": null, "Input": "Cesar Prado", "Involved": null, "BD": "Yes", "Description": "Advanced stage", "Type of Deal": "SI", "Technology": "Oracle", "Item Type": "Item", "Path": "sites/SolutionEfficiencyAA/Lists/Controle America Corridors"},
            {"FY": "FY26", "Type Opp": "RFI", "Title": "UK", "Opp ID": "12765433", "Customer": "Rolls Royce", "Stage": "Canceled", "Folder": "FY26M01 - RR - Manufacturing", "Industry": "PRD", "Estimated Amount": "USD 800k", "Estimated Revenue": 800000, "Pricing Model": "Time & Material", "Invoice": "UK", "CCI": null, "SLA": null, "Input": "Cesar Prado", "Involved": null, "BD": "No", "Description": "Project suspended", "Type of Deal": "AMS", "Technology": "Custom", "Item Type": "Item", "Path": "sites/SolutionEfficiencyAA/Lists/Controle America Corridors"},
            {"FY": "FY25", "Type Opp": "RFP", "Title": "DE", "Opp ID": "12854321", "Customer": "Siemens", "Stage": "Canceled", "Folder": "FY25M09 - Siemens - Industrial IoT", "Industry": "CMT", "Estimated Amount": "USD 1.5M", "Estimated Revenue": 1500000, "Pricing Model": "Fixed Price, Fixed Scope", "Invoice": "DE", "CCI": null, "SLA": null, "Input": "Cesar Prado", "Involved": null, "BD": "Yes", "Description": "Requirements changed", "Type of Deal": "SI", "Technology": "Custom", "Item Type": "Item", "Path": "sites/SolutionEfficiencyAA/Lists/Controle America Corridors"}
        ];

        this.filteredData = [...this.data];
        this.charts = {};
        this.currentPage = 1;
        this.pageSize = 10;
        this.sortColumn = '';
        this.sortDirection = 'asc';

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

        // Navigation click handler
        [...navLinks, ...heroButtons].forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetPage = link.getAttribute('data-page');
                this.showPage(targetPage);

                // Update active nav link
                navLinks.forEach(nl => nl.classList.remove('active'));
                const activeNavLink = document.querySelector(`[data-page="${targetPage}"].nav-link`);
                if (activeNavLink) activeNavLink.classList.add('active');

                // Close mobile menu
                navMenu.classList.remove('active');
            });
        });

        // Mobile menu toggle
        if (navToggle) {
            navToggle.addEventListener('click', () => {
                navMenu.classList.toggle('active');
            });
        }
    }

    showPage(pageId) {
        // Hide all pages
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });

        // Show target page
        const targetPage = document.getElementById(pageId);
        if (targetPage) {
            targetPage.classList.add('active');

            // Update charts if showing dashboard
            if (pageId === 'dashboard') {
                setTimeout(() => this.updateCharts(), 100);
            }
        }
    }

    setupFilters() {
        const filters = ['countryFilter', 'industryFilter', 'stageFilter', 'fyFilter'];

        filters.forEach(filterId => {
            const filter = document.getElementById(filterId);
            if (filter) {
                filter.addEventListener('change', () => this.applyFilters());
            }
        });

        const clearFilters = document.getElementById('clearFilters');
        if (clearFilters) {
            clearFilters.addEventListener('click', () => this.clearFilters());
        }
    }

    applyFilters() {
        const country = document.getElementById('countryFilter').value;
        const industry = document.getElementById('industryFilter').value;
        const stage = document.getElementById('stageFilter').value;
        const fy = document.getElementById('fyFilter').value;

        this.filteredData = this.data.filter(item => {
            return (!country || item.Title === country) &&
                   (!industry || item.Industry === industry) &&
                   (!stage || item.Stage === stage) &&
                   (!fy || item.FY === fy);
        });

        this.updateDashboard();
    }

    clearFilters() {
        document.getElementById('countryFilter').value = '';
        document.getElementById('industryFilter').value = '';
        document.getElementById('stageFilter').value = '';
        document.getElementById('fyFilter').value = '';

        this.filteredData = [...this.data];
        this.updateDashboard();
    }

    updateDashboard() {
        this.updateKPIs();
        this.updateCharts();
        this.updateTable();
    }

    updateKPIs() {
        const totalOpps = this.filteredData.length;
        const totalRevenue = this.filteredData.reduce((sum, item) => sum + (item['Estimated Revenue'] || 0), 0);
        const avgRevenue = totalOpps > 0 ? totalRevenue / totalOpps : 0;
        const wonDeals = this.filteredData.filter(item => item.Stage === 'Won').length;
        const winRate = totalOpps > 0 ? (wonDeals / totalOpps) * 100 : 0;

        document.getElementById('totalOpportunities').textContent = totalOpps;
        document.getElementById('totalRevenue').textContent = this.formatCurrency(totalRevenue);
        document.getElementById('avgRevenue').textContent = this.formatCurrency(avgRevenue);
        document.getElementById('winRate').textContent = winRate.toFixed(1) + '%';
    }

    formatCurrency(amount) {
        if (amount >= 1000000000) {
            return '$' + (amount / 1000000000).toFixed(1) + 'B';
        } else if (amount >= 1000000) {
            return '$' + (amount / 1000000).toFixed(1) + 'M';
        } else if (amount >= 1000) {
            return '$' + (amount / 1000).toFixed(0) + 'K';
        } else {
            return '$' + amount.toFixed(0);
        }
    }

    setupCharts() {
        // Initialize Chart.js charts
        this.setupIndustryChart();
        this.setupStageChart();
        this.setupRevenueChart();
        this.setupWorldMap();
    }

    setupIndustryChart() {
        const ctx = document.getElementById('industryChart');
        if (!ctx) return;

        this.charts.industry = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: [],
                datasets: [{
                    label: 'Oportunidades',
                    data: [],
                    backgroundColor: [
                        '#667eea', '#764ba2', '#f093fb', '#f5576c', '#4facfe'
                    ],
                    borderColor: [
                        '#667eea', '#764ba2', '#f093fb', '#f5576c', '#4facfe'
                    ],
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                onClick: (event, elements) => {
                    if (elements.length > 0) {
                        const index = elements[0].index;
                        const industry = this.charts.industry.data.labels[index];
                        document.getElementById('industryFilter').value = industry;
                        this.applyFilters();
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            afterLabel: (context) => {
                                const industry = context.label;
                                const revenue = this.filteredData
                                    .filter(item => item.Industry === industry)
                                    .reduce((sum, item) => sum + (item['Estimated Revenue'] || 0), 0);
                                return `Receita: ${this.formatCurrency(revenue)}`;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            precision: 0
                        }
                    }
                }
            }
        });
    }

    setupStageChart() {
        const ctx = document.getElementById('stageChart');
        if (!ctx) return;

        this.charts.stage = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: [],
                datasets: [{
                    data: [],
                    backgroundColor: [
                        '#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3'
                    ],
                    borderWidth: 2,
                    borderColor: '#ffffff'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                onClick: (event, elements) => {
                    if (elements.length > 0) {
                        const index = elements[0].index;
                        const stage = this.charts.stage.data.labels[index];
                        document.getElementById('stageFilter').value = stage;
                        this.applyFilters();
                    }
                },
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            padding: 20,
                            usePointStyle: true
                        }
                    },
                    tooltip: {
                        callbacks: {
                            afterLabel: (context) => {
                                const stage = context.label;
                                const revenue = this.filteredData
                                    .filter(item => item.Stage === stage)
                                    .reduce((sum, item) => sum + (item['Estimated Revenue'] || 0), 0);
                                return `Receita: ${this.formatCurrency(revenue)}`;
                            }
                        }
                    }
                }
            }
        });
    }

    setupRevenueChart() {
        const ctx = document.getElementById('revenueChart');
        if (!ctx) return;

        this.charts.revenue = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['FY25', 'FY26'],
                datasets: [{
                    label: 'Receita por Ano Fiscal',
                    data: [],
                    borderColor: '#667eea',
                    backgroundColor: 'rgba(102, 126, 234, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                        position: 'top'
                    },
                    tooltip: {
                        mode: 'index',
                        intersect: false,
                        callbacks: {
                            label: (context) => {
                                return `${context.dataset.label}: ${this.formatCurrency(context.raw)}`;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: (value) => this.formatCurrency(value)
                        }
                    }
                }
            }
        });
    }

    setupWorldMap() {
        const mapContainer = document.getElementById('worldMap');
        if (!mapContainer) return;

        // Simple world map representation
        mapContainer.innerHTML = `
            <div style="display: flex; flex-direction: column; align-items: center; gap: 20px;">
                <h4 style="margin: 0; color: #4a5568;">Distribuição por País</h4>
                <div style="display: flex; gap: 30px; flex-wrap: wrap; justify-content: center;">
                    <div class="country-card" data-country="USA" style="text-align: center; cursor: pointer; padding: 15px; border-radius: 8px; background: #f7fafc; transition: all 0.3s ease;">
                        <div style="font-size: 2rem; margin-bottom: 8px;">🇺🇸</div>
                        <div style="font-weight: 600; color: #2d3748;">USA</div>
                        <div id="usa-count" style="color: #667eea; font-size: 1.2rem; font-weight: 700;">0</div>
                    </div>
                    <div class="country-card" data-country="UK" style="text-align: center; cursor: pointer; padding: 15px; border-radius: 8px; background: #f7fafc; transition: all 0.3s ease;">
                        <div style="font-size: 2rem; margin-bottom: 8px;">🇬🇧</div>
                        <div style="font-weight: 600; color: #2d3748;">UK</div>
                        <div id="uk-count" style="color: #667eea; font-size: 1.2rem; font-weight: 700;">0</div>
                    </div>
                    <div class="country-card" data-country="DE" style="text-align: center; cursor: pointer; padding: 15px; border-radius: 8px; background: #f7fafc; transition: all 0.3s ease;">
                        <div style="font-size: 2rem; margin-bottom: 8px;">🇩🇪</div>
                        <div style="font-weight: 600; color: #2d3748;">Alemanha</div>
                        <div id="de-count" style="color: #667eea; font-size: 1.2rem; font-weight: 700;">0</div>
                    </div>
                </div>
            </div>
        `;

        // Add click handlers for country cards
        document.querySelectorAll('.country-card').forEach(card => {
            card.addEventListener('click', () => {
                const country = card.getAttribute('data-country');
                document.getElementById('countryFilter').value = country;
                this.applyFilters();
            });

            card.addEventListener('mouseenter', () => {
                card.style.background = '#edf2f7';
                card.style.transform = 'translateY(-2px)';
                card.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
            });

            card.addEventListener('mouseleave', () => {
                card.style.background = '#f7fafc';
                card.style.transform = 'translateY(0)';
                card.style.boxShadow = 'none';
            });
        });
    }

    updateCharts() {
        this.updateIndustryChart();
        this.updateStageChart();
        this.updateRevenueChart();
        this.updateWorldMap();
    }

    updateIndustryChart() {
        if (!this.charts.industry) return;

        const industryData = {};
        this.filteredData.forEach(item => {
            const industry = item.Industry || 'Unknown';
            industryData[industry] = (industryData[industry] || 0) + 1;
        });

        const labels = Object.keys(industryData);
        const data = Object.values(industryData);

        this.charts.industry.data.labels = labels;
        this.charts.industry.data.datasets[0].data = data;
        this.charts.industry.update();
    }

    updateStageChart() {
        if (!this.charts.stage) return;

        const stageData = {};
        this.filteredData.forEach(item => {
            const stage = item.Stage || 'Unknown';
            stageData[stage] = (stageData[stage] || 0) + 1;
        });

        const labels = Object.keys(stageData);
        const data = Object.values(stageData);

        this.charts.stage.data.labels = labels;
        this.charts.stage.data.datasets[0].data = data;
        this.charts.stage.update();
    }

    updateRevenueChart() {
        if (!this.charts.revenue) return;

        const fyData = { 'FY25': 0, 'FY26': 0 };
        this.filteredData.forEach(item => {
            const fy = item.FY || 'Unknown';
            if (fyData.hasOwnProperty(fy)) {
                fyData[fy] += item['Estimated Revenue'] || 0;
            }
        });

        this.charts.revenue.data.datasets[0].data = [fyData['FY25'], fyData['FY26']];
        this.charts.revenue.update();
    }

    updateWorldMap() {
        const countryData = {};
        this.filteredData.forEach(item => {
            const country = item.Title || 'Unknown';
            countryData[country] = (countryData[country] || 0) + 1;
        });

        // Update country counts
        document.getElementById('usa-count').textContent = countryData['USA'] || 0;
        document.getElementById('uk-count').textContent = countryData['UK'] || 0;
        document.getElementById('de-count').textContent = countryData['DE'] || 0;
    }

    setupTable() {
        const searchInput = document.getElementById('tableSearch');
        const exportButton = document.getElementById('exportData');
        const prevButton = document.getElementById('prevPage');
        const nextButton = document.getElementById('nextPage');

        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.searchTable(e.target.value);
            });
        }

        if (exportButton) {
            exportButton.addEventListener('click', () => {
                this.exportToCSV();
            });
        }

        if (prevButton) {
            prevButton.addEventListener('click', () => {
                if (this.currentPage > 1) {
                    this.currentPage--;
                    this.updateTable();
                }
            });
        }

        if (nextButton) {
            nextButton.addEventListener('click', () => {
                const totalPages = Math.ceil(this.filteredData.length / this.pageSize);
                if (this.currentPage < totalPages) {
                    this.currentPage++;
                    this.updateTable();
                }
            });
        }

        // Setup column sorting
        document.querySelectorAll('[data-sort]').forEach(header => {
            header.addEventListener('click', () => {
                const column = header.getAttribute('data-sort');
                this.sortTable(column);
            });
        });
    }

    searchTable(searchTerm) {
        if (!searchTerm.trim()) {
            this.filteredData = [...this.data];
        } else {
            this.filteredData = this.data.filter(item => {
                return Object.values(item).some(value => 
                    value && value.toString().toLowerCase().includes(searchTerm.toLowerCase())
                );
            });
        }

        this.currentPage = 1;
        this.updateDashboard();
    }

    sortTable(column) {
        if (this.sortColumn === column) {
            this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
        } else {
            this.sortColumn = column;
            this.sortDirection = 'asc';
        }

        this.filteredData.sort((a, b) => {
            let aVal = a[column];
            let bVal = b[column];

            // Handle null/undefined values
            if (aVal == null) aVal = '';
            if (bVal == null) bVal = '';

            // Convert to string for comparison
            aVal = aVal.toString().toLowerCase();
            bVal = bVal.toString().toLowerCase();

            if (this.sortDirection === 'asc') {
                return aVal.localeCompare(bVal);
            } else {
                return bVal.localeCompare(aVal);
            }
        });

        this.currentPage = 1;
        this.updateTable();
    }

    updateTable() {
        const tbody = document.getElementById('tableBody');
        if (!tbody) return;

        const startIndex = (this.currentPage - 1) * this.pageSize;
        const endIndex = startIndex + this.pageSize;
        const pageData = this.filteredData.slice(startIndex, endIndex);

        tbody.innerHTML = pageData.map(item => `
            <tr>
                <td>${item.Customer || ''}</td>
                <td>${item.Title || ''}</td>
                <td>${item.Industry || ''}</td>
                <td><span class="stage-badge stage-${(item.Stage || '').toLowerCase()}">${item.Stage || ''}</span></td>
                <td>${this.formatCurrency(item['Estimated Revenue'] || 0)}</td>
                <td>${item.Technology || ''}</td>
                <td>${item['Type of Deal'] || ''}</td>
            </tr>
        `).join('');

        // Update pagination info
        const totalRecords = this.filteredData.length;
        const totalPages = Math.ceil(totalRecords / this.pageSize);

        document.getElementById('showingStart').textContent = startIndex + 1;
        document.getElementById('showingEnd').textContent = Math.min(endIndex, totalRecords);
        document.getElementById('totalRecords').textContent = totalRecords;
        document.getElementById('pageInfo').textContent = `Página ${this.currentPage} de ${totalPages}`;

        // Update pagination buttons
        document.getElementById('prevPage').disabled = this.currentPage <= 1;
        document.getElementById('nextPage').disabled = this.currentPage >= totalPages;
    }

    exportToCSV() {
        const headers = ['Customer', 'Title', 'Industry', 'Stage', 'Estimated Revenue', 'Technology', 'Type of Deal'];
        const csvContent = [
            headers.join(','),
            ...this.filteredData.map(item => [
                item.Customer || '',
                item.Title || '',
                item.Industry || '',
                item.Stage || '',
                item['Estimated Revenue'] || 0,
                item.Technology || '',
                item['Type of Deal'] || ''
            ].map(field => `"${field}"`).join(','))
        ].join('\n');

        const blob = new Blob([csvContent], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'dashboard-data.csv';
        link.click();
        URL.revokeObjectURL(url);
    }

    setupFileUpload() {
        const uploadArea = document.getElementById('uploadArea');
        const fileInput = document.getElementById('fileInput');
        const selectFileBtn = document.getElementById('selectFile');

        if (!uploadArea || !fileInput || !selectFileBtn) return;

        // File selection button
        selectFileBtn.addEventListener('click', () => {
            fileInput.click();
        });

        // File input change
        fileInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                this.processFile(file);
            }
        });

        // Drag and drop functionality
        uploadArea.addEventListener('dragover', (e) => {
            e.preventDefault();
            uploadArea.classList.add('dragover');
        });

        uploadArea.addEventListener('dragleave', () => {
            uploadArea.classList.remove('dragover');
        });

        uploadArea.addEventListener('drop', (e) => {
            e.preventDefault();
            uploadArea.classList.remove('dragover');

            const file = e.dataTransfer.files[0];
            if (file && (file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' || 
                        file.type === 'application/vnd.ms-excel')) {
                this.processFile(file);
            } else {
                alert('Por favor, selecione um arquivo Excel válido (.xlsx ou .xls)');
            }
        });
    }

    processFile(file) {
        const progressContainer = document.getElementById('uploadProgress');
        const progressFill = document.getElementById('progressFill');
        const progressText = document.getElementById('progressText');

        if (!progressContainer || !progressFill || !progressText) return;

        progressContainer.style.display = 'block';
        progressFill.style.width = '0%';
        progressText.textContent = 'Processando arquivo...';

        // Simulate file processing
        let progress = 0;
        const interval = setInterval(() => {
            progress += 10;
            progressFill.style.width = progress + '%';

            if (progress >= 100) {
                clearInterval(interval);
                progressText.textContent = 'Arquivo processado com sucesso!';

                setTimeout(() => {
                    progressContainer.style.display = 'none';
                    alert('Arquivo Excel carregado com sucesso! (Funcionalidade de demonstração)');
                }, 1000);
            }
        }, 100);
    }

    setupForm() {
        const form = document.getElementById('dataEntryForm');
        const resetButton = document.getElementById('resetForm');

        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleFormSubmit(form);
            });
        }

        if (resetButton) {
            resetButton.addEventListener('click', () => {
                form.reset();
            });
        }
    }

    handleFormSubmit(form) {
        const formData = new FormData(form);
        const newRecord = {};

        // Convert FormData to object
        for (let [key, value] = formData.entries()) {
            newRecord[key] = value;
        }

        // Add additional fields
        newRecord['Estimated Revenue'] = parseInt(newRecord['Estimated Revenue']) || 0;
        newRecord['Item Type'] = 'Item';
        newRecord['Input'] = 'Manual Entry';
        newRecord['BD'] = 'Yes';
        newRecord['Path'] = 'sites/SolutionEfficiencyAA/Lists/Controle America Corridors';

        // Add to data
        this.data.push(newRecord);
        this.filteredData = [...this.data];

        // Reset form and update dashboard
        form.reset();
        this.updateDashboard();

        alert('Dados adicionados com sucesso!');

        // Switch to dashboard page
        this.showPage('dashboard');
        document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
        document.querySelector('[data-page="dashboard"].nav-link').classList.add('active');
    }
}

// Initialize dashboard when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new BIDashboard();
});

// Add some CSS for stage badges
const style = document.createElement('style');
style.textContent = `
    .stage-badge {
        padding: 4px 8px;
        border-radius: 4px;
        font-size: 0.75rem;
        font-weight: 600;
        text-transform: uppercase;
    }
    .stage-won { background: #d4edda; color: #155724; }
    .stage-canceled { background: #f8d7da; color: #721c24; }
    .stage-0a { background: #fff3cd; color: #856404; }
    .stage-1 { background: #cce5ff; color: #004085; }
    .stage-2b { background: #e2e3e5; color: #41464b; }
`;
document.head.appendChild(style);