import React, { Component } from 'react'
let data={
    "links": {
      "self": "http://example.com/articles",
      "next": "http://example.com/articles?page[offset]=2",
      "last": "http://example.com/articles?page[offset]=10"
    },
    "data": [{
      "type": "articles",
      "id": "1",
      "attributes": {
        "title": "JSON:API paints my bikeshed!"
      },
      "relationships": {
        "author": {
          "links": {
            "self": "http://example.com/articles/1/relationships/author",
            "related": "http://example.com/articles/1/author"
          },
          "data": { "type": "people", "id": "9" }
        },
        "comments": {
          "links": {
            "self": "http://example.com/articles/1/relationships/comments",
            "related": "http://example.com/articles/1/comments"
          },
          "data": [
            { "type": "comments", "id": "5" },
            { "type": "comments", "id": "12" }
          ]
        }
      },
      "links": {
        "self": "http://example.com/articles/1"
      }
    }],
    "included": [{
      "type": "people",
      "id": "9",
      "attributes": {
        "firstName": "Dan",
        "lastName": "Gebhardt",
        "twitter": "dgeb"
      },
      "links": {
        "self": "http://example.com/people/9"
      }
    }, {
      "type": "comments",
      "id": "5",
      "attributes": {
        "body": "First!"
      },
      "relationships": {
        "author": {
          "data": { "type": "people", "id": "2" }
        }
      },
      "links": {
        "self": "http://example.com/comments/5"
      }
    }, {
      "type": "comments",
      "id": "12",
      "attributes": {
        "body": "I like XML better"
      },
      "relationships": {
        "author": {
          "data": { "type": "people", "id": "9" }
        }
      },
      "links": {
        "self": "http://example.com/comments/12"
      }
    }]
  }
  export default class Student extends Component{

        loaddata(){
            let table =
            <table>
                <th>new</th>
                <tr>{this.loadRows()}</tr>
            </table>
            return table;
        }
        loadRows(){
            let myRows=[];
            for(let i=0;i<data.data.length;i++)
            {
            let row= <tr>
            <td>{data.data[i].links}</td>
            <td>{data.data[i].relationships}</td>
            <td>{data.data[i].type}</td>
             </tr>
             myRows.push(row);
            }
        return myRows;
        }
      render(){
          return(
              <div>
                <h1>All Data</h1>
                {this.loaddata()}
              </div>
          );
      }
  }