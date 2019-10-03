// Quick Filter
function onQuickFilterChanged() {
    gridOptions.api.setQuickFilter(document.getElementById('quickFilter').value);
}

// specify the columns
   var columnDefs = [
     {
         headerName: "Fund",
         field: "fund",
         width: 350,
         sort: 'asc',
         sortable: true,
         filter: 'agTextColumnFilter',
         editable:true,
         headerCheckboxSelection: true,
         checkboxSelection:true,
         resizable: true
     },
     {headerName: "Fund Manager", field: "manager", width: 250, sortable: true, filter: 'agTextColumnFilter', editable:true, resizable: true},
     {headerName: "Fund Close Size (USD MN)", field: "closesize", sortable: true, filter: 'agNumberColumnFilter', editable:true, resizable: true},
     {headerName: "Net IRR (%)", field: "netirr", sortable: true, filter: 'agNumberColumnFilter', editable:true, resizable: true},
     {headerName: "Net Mulitple (X)", field: "netmultiple", sortable: true, filter: 'agNumberColumnFilter', editable:true, resizable: true},
     {headerName: "RVPI (%)", field: "rvpi", sortable: true, filter: 'agNumberColumnFilter', editable:true, resizable: true},
     {headerName: "DPI (%)", field: "dpi", sortable: true, filter: 'agNumberColumnFilter', editable:true, resizable: true},
     {headerName: "CALLED (%)", field: "called", sortable: true, filter: 'agNumberColumnFilter', editable:true, resizable: true}
   ];

   // specify the data
   var rowData = [
     // {fund: "Toyota", closesize: "Celica", netmultiple: 35000},
     // {fund: "Ford", closesize: "Mondeo", netmultiple: 32000},
     // {fund: "Porsche", closesize: "Boxter", netmultiple: 72000}
   ];

   // let the grid know which columns and what data to use
   var gridOptions = {
     columnDefs: columnDefs,
     rowData: rowData,
     animateRows: true,
     editType: 'fullRow',
     enableRangeSelection: true,
     enableCharts: true,
     floatingFilter: true,
     rowSelection: 'multiple',
     sideBar: {
         toolPanels:[{
             id: 'columns',
             labelDefault: 'Columns',
             labelKey: 'columns',
             iconKey: 'columns',
             toolPanel: 'agColumnsToolPanel',
             toolPanelParams: {
                suppressRowGroups: false,
                suppressValues: false,
                suppressPivotMode: false,
                suppressPivots: false
             }
         }],
         defaultToolPanel: ''
     },
     statusBar: {
         statusPanels: [
             {statusPanel: 'agTotalAndFilteredRowCountComponent', align: 'left'},
             { statusPanel: 'agFilteredRowCountComponent'},
             { statusPanel: 'agSelectedRowCountComponent' },
             { statusPanel: 'agAggregationComponent', align: 'center'  }
         ]
     },
     suppressRowClickSelection: true
     // end of gridOptions
   }

function getData() {
    for (var i = 0; i < data.length; i++) {
        rowData.push({'fund': data[i][0], 'manager':data[i][1], 'closesize': data[i][2], 'netirr': data[i][3], 'netmultiple': data[i][4], 'rvpi': data[i][5], 'dpi': data[i][6], 'called': data[i][7]})
    };
};

getData()

// INITIALIZE DATA TABLE
// lookup the container we want the Grid to use
var eGridDiv = document.querySelector('#myGrid');

// create the grid passing in the div to use together with the columns & data we want to use
new agGrid.Grid(eGridDiv, gridOptions);
