/// <reference path="../interfaces.ts" />

/**
 * This file is auto-generated by the `asana-api-meta` NodeJS package.
 * We try to keep the generated code pretty clean but there will be lint
 * errors that are just not worth fixing.
 */
/* tslint:disable:max-line-length */
/* tslint:disable:eofline */
var resource = <Resource>{
  "name": "team",
  "comment": "A _team_ is used to group related projects and people together within an\norganization. Each project in an organization is associated with a team.\n",
  "properties": [
    {
      "name": "id",
      "type": "Id",
      "example_values": [
        "1234"
      ],
      "access": "Read-only",
      "comment": "Globally unique ID of the team.\n"
    },
    {
      "name": "name",
      "type": "String",
      "example_values": [
        "'Engineering'"
      ],
      "comment": "The name of the team.\n"
    }
  ],
  "action_classes": [
    {
      "name": "Get teams in organization",
      "url": "get"
    },
    {
      "name": "Get team members",
      "url": "users"
    }
  ],
  "actions": [
    {
      "name": "findById",
      "class": "get",
      "method": "GET",
      "path": "/teams/%s",
      "params": [
        {
          "name": "team",
          "type": "Id",
          "example_values": [
            "14916"
          ],
          "comment": "Globally unique identifier for the team.\n",
          "required": true
        }
      ],
      "comment": "Returns the full record for a single team.\n"
    },
    {
      "name": "findByOrganization",
      "class": "get",
      "method": "GET",
      "path": "/organizations/%s/teams",
      "collection": true,
      "params": [
        {
          "name": "organization",
          "type": "Id",
          "example_values": [
            "1331"
          ],
          "comment": "Globally unique identifier for the workspace or organization.\n",
          "required": true
        }
      ],
      "comment": "Returns the compact records for all teams in the organization visible to\nthe authorized user.\n"
    },
    {
      "name": "users",
      "class": "users",
      "method": "GET",
      "path": "/teams/%s/users",
      "collection": true,
      "collection_cannot_paginate": true,
      "params": [
        {
          "name": "team",
          "type": "Id",
          "example_values": [
            "14916"
          ],
          "comment": "Globally unique identifier for the team.\n",
          "required": true
        }
      ],
      "comment": "Returns the compact records for all users that are members of the team.\n"
    },
    {
      "name": "addUser",
      "class": "users",
      "method": "POST",
      "path": "/teams/%s/addUser",
      "params": [
        {
          "name": "team",
          "type": "Id",
          "example_values": [
            "14916"
          ],
          "comment": "Globally unique identifier for the team.\n",
          "required": true
        },
        {
          "name": "user",
          "type": "String",
          "example_values": [
            "14641",
            "me",
            "sashimi@asana.com"
          ],
          "comment": "An identifier for the user. Can be one of an email address,\nthe globally unique identifier for the user, or the keyword `me`\nto indicate the current user making the request.\n",
          "required": true
        }
      ],
      "comment": "The user making this call must be a member of the team in order to add others.\nThe user to add must exist in the same organization as the team in order to be added.\nThe user to add can be referenced by their globally unique user ID or their email address.\nReturns the full user record for the added user.\n"
    },
    {
      "name": "removeUser",
      "class": "users",
      "method": "POST",
      "path": "/teams/%s/removeUser",
      "params": [
        {
          "name": "team",
          "type": "Id",
          "example_values": [
            "14916"
          ],
          "comment": "Globally unique identifier for the team.\n",
          "required": true
        },
        {
          "name": "user",
          "type": "String",
          "example_values": [
            "14641",
            "me",
            "sashimi@asana.com"
          ],
          "comment": "An identifier for the user. Can be one of an email address,\nthe globally unique identifier for the user, or the keyword `me`\nto indicate the current user making the request.\n",
          "required": true
        }
      ],
      "comment": "The user to remove can be referenced by their globally unique user ID or their email address.\nRemoves the user from the specified team. Returns an empty data record.\n"
    }
  ]
};
export = resource;