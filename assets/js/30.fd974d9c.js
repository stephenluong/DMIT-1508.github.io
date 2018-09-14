(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{233:function(e,t,a){"use strict";a.r(t);var s=a(0),i=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("h4",{attrs:{id:"simple-sql-queries"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#simple-sql-queries","aria-hidden":"true"}},[e._v("#")]),e._v(" Simple SQL Queries")]),e._v(" "),a("p",[e._v("At the end of this topic, you should be able to:")]),e._v(" "),a("ul",[a("li",[e._v("List the six clauses of the SELECT statement in SQL")]),e._v(" "),a("li",[e._v("Identify the purpose of SELECT statements")]),e._v(" "),a("li",[e._v("Identify the general order in which the clauses of a SELECT statement are executed in SQL Server")]),e._v(" "),a("li",[e._v("Construct queries to perform simple selects on database tables")])]),e._v(" "),a("hr"),e._v(" "),a("h4",{attrs:{id:"database-functions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#database-functions","aria-hidden":"true"}},[e._v("#")]),e._v(" Database Functions")]),e._v(" "),a("p",[e._v("At the end of this topic, you should be able to:")]),e._v(" "),a("ul",[a("li",[e._v("List at least five SQL functions for working with strings")]),e._v(" "),a("li",[e._v("List at least five SQL functions for working with dates")]),e._v(" "),a("li",[e._v("List at least five SQL functions for working with aggregates")]),e._v(" "),a("li",[e._v("Identify the general order in which the clauses of a SELECT statement are executed in SQL Server")]),e._v(" "),a("li",[e._v("Construct queries to perform simple selects on database tables")])]),e._v(" "),a("hr"),e._v(" "),a("h4",{attrs:{id:"multi-table-queries"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#multi-table-queries","aria-hidden":"true"}},[e._v("#")]),e._v(" Multi-table Queries")]),e._v(" "),a("p",[e._v("At the end of this topic, you should be able to:")]),e._v(" "),a("ul",[a("li",[e._v("Explain the difference between inner and outer joins as it affects the data retrieved in a query")]),e._v(" "),a("li",[e._v("Construct queries to perform simple selects on related database tables using INNER JOINs")]),e._v(" "),a("li",[e._v("Create queries involving outer joins")]),e._v(" "),a("li",[e._v("Create queries involving subqueries")]),e._v(" "),a("li",[e._v("Create queries involving unions")])]),e._v(" "),a("hr"),e._v(" "),a("h1",{attrs:{id:"introduction-to-sql-queries"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction-to-sql-queries","aria-hidden":"true"}},[e._v("#")]),e._v(" Introduction to SQL Queries")]),e._v(" "),a("p",[e._v("Queries are used to retrieve data from the database. They can be very flexible in what columns they select, what rows they select, and what aggregate calculations they return. Being able to write accurate and efficient queries is a critical skill when working with databases.")]),e._v(" "),a("p",[e._v("Queries are written with the SELECT statement. The SELECT syntax contains six clauses. In order, they are:")]),e._v(" "),a("p",[e._v("SELECT clause")]),e._v(" "),a("p",[e._v("A comma-separated list of column data to generate.")]),e._v(" "),a("p",[e._v("FROM clause")]),e._v(" "),a("p",[e._v("Identifies the table(s) used as the source of the data to generate/retreive.")]),e._v(" "),a("p",[e._v("WHERE clause")]),e._v(" "),a("p",[e._v("Filtering to be done on the rows of data.")]),e._v(" "),a("p",[e._v("GROUP BY clause")]),e._v(" "),a("p",[e._v("A list of columns to group the data by for aggregation operations.")]),e._v(" "),a("p",[e._v("HAVING clause")]),e._v(" "),a("p",[e._v("Filtering to be done on aggregate values.")]),e._v(" "),a("p",[e._v("ORDER BY clause")]),e._v(" "),a("p",[e._v("Sorting of the final result set.")]),e._v(" "),a("p",[e._v("The full syntax available for a select statement is:")]),e._v(" "),a("p",[e._v("SELECT [ALL | DISTINCT] column_list"),a("br"),e._v("\nINTO [new_table_name]"),a("br"),e._v("\n[FROM table_name [, table_name2 […, table_name16]]"),a("br"),e._v("\n[INNER, LEFT OUTER, RIGHT OUTER JOIN]"),a("br"),e._v("\n[WHERE clause]"),a("br"),e._v("\n[GROUP BY clause]"),a("br"),e._v("\n[HAVING clause]"),a("br"),e._v("\n[ORDER BY clause]")]),e._v(" "),a("p",[e._v("Syntax structure of the SELECT statement")]),e._v(" "),a("p",[e._v("If it looks complex don't worry. All the “clauses” listed don't need to be used when creating a query. However, what you do use MUST be in the order shown above (HAVING MUST be after GROUP BY for example and not vice versa). In addition, there are other functionality beyond the syntax such as the ability to use string, date, and aggregate functions in your queries to retrieve and calculate date to be returned. We will start by looking at simple queries and then adding in the additional clauses after that.")]),e._v(" "),a("p",[e._v("All the examples can be executed in the IQSchool database so you can see the results.")]),e._v(" "),a("p",[e._v("![](/topics/SQL/IQSchool - ERD.png)")])])}],!1,null,null,null);t.default=i.exports}}]);