/// <reference path="../interfaces.ts" />

/**
 * This file is auto-generated by the `asana-api-meta` NodeJS package.
 * We try to keep the generated code pretty clean but there will be lint
 * errors that are just not worth fixing.
 */
/* tslint:disable:max-line-length */
var resource = <Resource>{
  "name": "story",
  "comment": "A _story_ represents an activity associated with an object in the Asana\nsystem. Stories are generated by the system whenever users take actions such\nas creating or assigning tasks, or moving tasks between projects. _Comments_\nare also a form of user-generated story.\n\nStories are a form of history in the system, and as such they are read-only.\nOnce generated, it is not possible to modify a story.\n",
  "properties": [
    {
      "name": "id",
      "type": "Id",
      "example_values": [
        "1234"
      ],
      "read_only": true,
      "comment": "Globally unique identifier for this object.\n"
    }
  ],
  "actions": [
    {
      "name": "findById",
      "method": "GET",
      "path": "/stories/%d",
      "params": [
        {
          "name": "story",
          "type": "Id",
          "example_values": [
            "182764"
          ],
          "comment": "Globally unique identifier for the team.\n",
          "required": true
        }
      ],
      "comment": "Returns the full record for a single story.\n"
    },
    {
      "name": "findByTask",
      "method": "GET",
      "path": "/tasks/%d/stories",
      "collection": true,
      "params": [
        {
          "name": "task",
          "type": "Id",
          "example_values": [
            "124816"
          ],
          "comment": "Globally unique identifier for the task.\n",
          "required": true
        }
      ],
      "comment": "Returns the compact records for all stories on the task.\n"
    },
    {
      "name": "createOnTask",
      "method": "POST",
      "path": "/tasks/%d/stories",
      "params": [
        {
          "name": "task",
          "type": "Id",
          "example_values": [
            "124816"
          ],
          "comment": "Globally unique identifier for the task.\n",
          "required": true
        },
        {
          "name": "text",
          "type": "String",
          "required": true,
          "comment": "The plain text of the comment to add."
        }
      ],
      "comment": "Adds a comment to a task. The comment will be authored by the\ncurrently authenticated user, and timestamped when the server receives\nthe request.\n\nReturns the full record for the new story added to the task.\n"
    }
  ]
};
export = resource;
