'use strict'

module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      return 'All chores here.'
    },
    config: {
      description: 'Gets all the chores available.'
    }
  },
  {
    method: 'POST',
    path: '/chore',
    handler: (request, h) => {
      return 'New chore.'
    },
    config: {
      description: 'Adds a new chore.'
    }
  },
  {
    method: 'GET',
    path: '/chore/{slug}',
    handler: (request, h) => {
      return 'This is a chore.'
    },
    config: {
      description: 'Gets the content of a chore.'
    }
  }
  {
    method: 'PUT',
    path: '/chore/{slug}',
    handler: (request, h) => {
      return 'Edit a chore.'
    },
    config: {
      description: 'Updates selected chore.'
    }
  }
  {
    method: 'GET',
    path: '/chore/{slug}/delete',
    handler: (request, h) => {
      return 'This chore no longer exists.'
    },
    config: {
      description: 'Deletes the selected chore.'
    }
  }
]
