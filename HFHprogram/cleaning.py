import csv
import random

#original csv file
filename = "MLB2008.csv"
#name of output csv file
outputfile = "testing.csv"
#first column you want
header1 = "H"
#second column you want
header2 = "LEADOFF_PA"
#initial blank array
original = []

#function to get headers in the original csv
def getHeaders():
    with open(filename) as f:
        f_csv = csv.reader(f)
        headers = next(f_csv)
    return headers

#function to create list of dictionaries from data
def getDataListOfDicts():
	list = []
	with open(filename) as f:
		fcsv = csv.DictReader(f)
		for row in fcsv:
			list.append(row)
	return list

#function to create a list from a column of original dataset
def getDataSlice(columnName, listOfDicts):
	list = []
	for dict in listOfDicts:
		list.append(dict[columnName])
	return list

headers = getHeaders()
myHeaders = []
for name in headers:
	if name == header1 or name == header2:
		myHeaders.append(name)

original = getDataListOfDicts()

#create list of player names
slice1 = getDataSlice(header1, original)

#create list of player hits
slice2 = getDataSlice(header2, original)

#combine both lists together
combo = zip(slice1, slice2)

#select 200 random datapoints
randomList = random.sample(combo, 200)

#export to CSV
def writeData(filename, headers, rows_list_of_lists):
    with open(filename,'wb') as f:
        f_csv = csv.writer(f)
        f_csv.writerow(headers)
        f_csv.writerows(rows_list_of_lists)

writeData(outputfile, myHeaders, randomList)