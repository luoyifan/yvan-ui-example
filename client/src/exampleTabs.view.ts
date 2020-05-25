export interface Refs {
  theTab: YvanUI.CtlTab;
}

export default abstract class <M, INP> extends YvanUI.BaseModule<M, Refs, INP> {
  viewResolver() {
    return {
      rows: [
        {
          view: "toolbar",
          elements: [
            {
              view: "button",
              text: "getValue",
              onClick: {
                type: "function",
                bind: "getValue",
              },
            },
          ],
        },
        {
          view: "tabview",
          ctlName: "theTab",
          defaultTabIndex: 1,
          tabbarContextMenu: [
            {
              text: "菜单1",
              onClick: {
                type: "function",
                bind: "tabBar1",
              },
            },
            {
              text: "菜单2",
              children: [
                {
                  text: "菜单2.1",
                  onClick: {
                    type: "function",
                    bind: "tabBar21",
                  },
                },
                {
                  text: "菜单2.2",
                  onClick: {
                    type: "function",
                    bind: "tabBar22",
                  },
                },
              ],
            },
            {
              text: "菜单3",
              onClick: {
                type: "function",
                bind: "tabBar3",
              },
            },
          ],
          tabbar: {
            view: "tabbar",
            close: false,
          },
          cells: [
            {
              header: "选项卡1",
              close: false,
              body: {
                rows: [
                  {
                    view: "template",
                    template: "卡1内容",
                  },
                ],
              },
            },
            {
              header: "选项卡2",
              close: false,
              body: {
                rows: [
                  {
                    view: "template",
                    template: "卡2内容",
                  },
                ],
              },
            },
          ],

          // rows: [
          //     {
          //         view: "tabbar",
          //         id: "tabbar",
          //         value: "formView",
          //         multiview: true, options: [
          //             {value: "List", id: "listView", close: true},
          //             {value: "Form", id: "formView"},
          //             {value: "Empty", id: "emptyView"}
          //         ]
          //     },
          //     {
          //         cells: [
          //             {
          //                 id: "listView",
          //                 view: "list",
          //                 template: "#rank#. #title# <div style='padding-left:18px'> Year:#year#, votes:#votes# </div>",
          //                 type: {
          //                     height: 60
          //                 },
          //                 select: true,
          //                 data: [{"id": 1, "title": "The Shawshank Redemption", "year": "1994", "votes": "678,79", "rating": "9,2", "rank": "1"}, {
          //                     "id": 2,
          //                     "title": "The Godfather",
          //                     "year": "1972",
          //                     "votes": "511,495",
          //                     "rating": "9,2",
          //                     "rank": "2"
          //                 }, {"id": 3, "title": "The Godfather: Part II", "year": "1974", "votes": "319,352", "rating": "9", "rank": "3"}, {
          //                     "id": 4,
          //                     "title": "The Good, the Bad and the Ugly",
          //                     "year": "1966",
          //                     "votes": "213,03",
          //                     "rating": "8,9",
          //                     "rank": "4"
          //                 }, {"id": 5, "title": "My Fair Lady", "year": "1964", "votes": "533,848", "rating": "8,9", "rank": "5"}, {
          //                     "id": 6,
          //                     "title": "12 Angry Men",
          //                     "year": "1957",
          //                     "votes": "164,558",
          //                     "rating": "8,9",
          //                     "rank": "6"
          //                 }, {"id": 7, "title": "Schindler's List", "year": "1993", "votes": "355,638", "rating": "8,9", "rank": "7"}, {
          //                     "id": 8,
          //                     "title": "Sleuth",
          //                     "year": "1972",
          //                     "votes": "22,343",
          //                     "rating": "8",
          //                     "rank": "8"
          //                 }]
          //             },
          //             {
          //                 id: "formView",
          //                 view: "list",
          //                 template: "#rank#. #title# <div style='padding-left:18px'> Year:#year#, votes:#votes# </div>",
          //                 type: {
          //                     height: 60
          //                 },
          //                 select: true,
          //                 data: [{"id": 1, "title": "The Shawshank Redemption", "year": "1994", "votes": "678,79", "rating": "9,2", "rank": "1"}, {
          //                     "id": 2,
          //                     "title": "The Godfather",
          //                     "year": "1972",
          //                     "votes": "511,495",
          //                     "rating": "9,2",
          //                     "rank": "2"
          //                 }, {"id": 3, "title": "The Godfather: Part II", "year": "1974", "votes": "319,352", "rating": "9", "rank": "3"}, {
          //                     "id": 4,
          //                     "title": "The Good, the Bad and the Ugly",
          //                     "year": "1966",
          //                     "votes": "213,03",
          //                     "rating": "8,9",
          //                     "rank": "4"
          //                 }]
          //             },
          //             {
          //                 id: "emptyView",
          //                 template: "",
          //             },
          //         ]
          //     },
          //     {}
          // ]
        },
      ],
    };
  }
}
