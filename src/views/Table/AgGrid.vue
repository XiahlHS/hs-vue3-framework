<script lang="tsx">
import { computed, defineComponent, unref } from 'vue'

export default defineComponent({
    name: 'AgGrid',
    setup() {
        const rowData: any = reactive({});

        const columnDefs = reactive([
            {
                headerName: '序号',
                width: 50,
                minWidth: 100,
                maxWidth: 100,
                cellRenderer: function (params: any) {
                    return parseInt(params.node.id) + 1
                },
                cellStyle: {
                    'text-align': 'left',
                },
                suppressSizeToFit: true,
                suppressSorting: true,
                suppressMenu: true,
                headerCheckboxSelection: true,
                checkboxSelection: true,
                showDisabledCheckboxes: true,
            },
            { field: "make" },
            { field: "model" },
            { field: "price" },
        ]);

        onMounted(() => {
            fetch("https://www.ag-grid.com/example-assets/row-data.json")
                .then((result) => result.json())
                .then((remoteRowData) => (rowData.value = remoteRowData));
        });

        return () => (
            <hs-ag-grid columnDefs={columnDefs} rowData={rowData.value}></hs-ag-grid>
        )
    }
})
</script>