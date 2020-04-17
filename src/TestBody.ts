export default class TestBody {
     init(inp:number): any {

        return {
            id: inp,
            rows: [
                {
                    view: "template",
                    type: "header", template: "My App!" + inp
                },
                {
                    view: "datatable",
                    autoConfig: true,
                    data: {
                        title: "My Fair Lady", year: 1964, votes: 533848, rating: 8.9, rank: 5
                    }
                }
            ]
        }
    }
}
