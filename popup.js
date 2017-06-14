walk(document.body);

function walk(node)
{
	var child, next;
	
	switch(node.nodeType) 
	{
		case 1:
		case 9:
		case 11:
				child = node.firstChild;
				while(child)
				{
					next = child.nextSibling;
					walk(child);
					child = next;
				}
				break;
		case 3:
			    handleText(node);
			    break
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bmy\b/g, "my royal highness");
	v = v.replace(/\bdog\b/g, "doogle");
	v = v.replace(/\bsmart\b/g, "dumb");
	v = v.replace(/\bhappy\b/g, "sad");
	v = v.replace(/\bfast\b/g, "slow");
	v = v.replace(/\bcake\b/g, "rank cheese");
	
	textNode.nodeValue = v;
}
