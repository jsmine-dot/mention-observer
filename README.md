# mention-observer
It is a pluggable piece of software which is indented to be used with any frontend framework. 
It observes user input for the assignd node.

## api:
Mention observer exposes *set* function. Set accepts object in parameter.

### set object strucure
{
	editArea: node,
	value: {rawText: string, mentions: [ { id: string, value: string}, ... ] },
	options: [ { id: sring, value: string } ,... ],
	callback: function
}

*callback* is called with object

### callBack object structure
{
	rawText: string, 
	mentions: [ { id: string, value: string }, ... ],
	searchKey: string
}































































































































