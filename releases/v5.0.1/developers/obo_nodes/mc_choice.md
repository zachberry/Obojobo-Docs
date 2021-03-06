---
title: MCAssessment > MCChoice
menus: chunks
full_name: ObojoboDraft.Chunks.MCAssessment.MCChoice
class: obo_node
node_class: chunk
---

A single answer choice in a multiple choice question containing the contents of the answer and optional feedback. Feedback is not displayed in an Assessment Attempt Quiz but is displayed outside Assessment or in Assessment Review (when full Assessment Review is being shown).

## Properties

| Property | Required | Type | Description |
|-
| score | For default questions | Integer | `0` or `100`: Represents the correctness of this answer choice - i.e. A correct answer should have a `score` of `100` and incorrect answers a `score` of `0`. This value is ignored for survey questions.

> Partial credit is not supported - values must be either `0` or `100`, not a value in-between. A future release may allow for partial credit.

## Supported Trigger Types

| Action Type | Description
|-
| onMount | Fired when a node is added to the DOM
| onUnmount | Fired when a node is removed from the DOM

## Required Children

Expects one or two children in order:

1.  **REQUIRED**: An {{ 'MCAnswer' | obo_node }} OboNode.
2.  An {{ 'MCFeedback' | obo_node }} OboNode. This is not displayed in an Assessment Attempt Quiz but is displayed outside Assessment or in Assessment Review (when full Assessment Review is being shown).

## Variables Registered

None

## Example

### JSON

```json
{
	"type": "ObojoboDraft.Chunks.MCAssessment.MCChoice",
	"id": "...",
	"content": {
		"score": 100
	},
	"children": [
		{
			"type": "ObojoboDraft.Chunks.MCAssessment.MCAnswer",
			"id": "...",
			"content": {
				"textGroup": [
					{
						"text": {
							"value": "Fourty two"
						}
					}
				]
			}
		},
		{
			"type": "ObojoboDraft.Chunks.MCAssessment.MCFeedback",
			"id": "...",
			"content": {
				"textGroup": [
					{
						"text": {
							"value": "That is the answer!"
						}
					}
				]
			}
		}
	]
}
```

### XML (with OboHTML)

```xml
<MCChoice score="100">
  <MCAnswer>
    <p>Fourty two</p>
  </MCAnswer>
  <MCFeedback>
    <p>That is the answer!</p>
  </MCFeedback>
</MCChoice>
```
