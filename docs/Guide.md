Introduce
===========

This repo conforms two parts.

Currency Chart
------------------

A chart provide 20 records of the ETH-USD latest trade occured. 
This widget requests data directly from coinapi through an embedded js rest api.

CRUD Interface
------------------

Provide an interactive and responsive CRUD part.
CRUD functionality was build up from an index board, a contract list of table view, a create/edit panel,and a search bar.
Redux and Epics modules make it  asyncly respond to the user activity after requests data from the server. 