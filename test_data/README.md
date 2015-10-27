# README for test_data directory

## Purpose

This directory was created to contain resources for developing software tests, including a directory for any local files, and a main listing of resources (URLs and references to local files).

## Format 

The main file "test_resources.csv" is a simple table in comma-separated-values format.  The fields are defined in "test_resources_meta.csv".  

Note that this file has fields that allow specification of a type of test, and that allow linking outputs to inputs: 
* output_of	: **operation** for which this is the expected output, e.g., scraping, scaling
* has_input : **input** for which this represents the expected output

The fields are designed with a particular representation strategy in mind.  To maintain normalization, inputs and outputs are only linked in one direction: outputs point to their inputs, but inputs do not point to their outputs.  Only outputs point to an operation.  

Note that it is possible to use the same file as input to different operations, and link it to different outputs.  The operations are specified in the record for the output resource.  