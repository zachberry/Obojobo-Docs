---
title: MCAssessment > MCChoice > MCFeedback
menus: chunks
full_name: OboDraft.Chunks.MCFeedback
node_class: chunk
---
This represents the contents of the feedback of a multiple choice answer choice. It is functionally identical to an {{ 'MCAnswer' | obo_node }}, but displays below a MCAssessment after the question has been answered

## Properties

None

## Supported Trigger Types

| Action Type | Description
|-
| onMount | Fired when a node is added to the DOM
| onUnmount | Fired when a node is removed from the DOM

## Required Children
{% assign chunks = (site.pages | where: "can_be_in_a_question", 'true' | sort: 'title' %}
One or more of the following Chunks: {% for chunk in chunks %} {{ chunk.title | obo_node }}{% if forloop.last == false %},{% endif %}{% endfor %}.

## Variables Registered

None

## Example

### JSON

```json
{
	"type": "ObojoboDraft.Chunks.MCAssessment.MCFeedback",
	"id": "...",
	"children": [
		{
			"type": "ObojoboDraft.Chunks.Text",
			"id": "...",
			"content": {
				"textGroup": [
					{
						"text": {
							"value": "Example Feedback"
						}
					}
				]
			}
		}
	]
}
```

### XML (With OboHTML)

```xml
<MCFeedback>
  <p>Example Feedback</p>
</MCFeedback>
```