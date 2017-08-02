# NestSI - Plataforma de reconversão de carreira profissional

## Development setup
For the development process we'll adopt Rails v5 and React v16

### 1) Clone repository

    $ git clone git@github.com:nestcollective/si2017-project.git

or using HTTPS:

    $ git clone https://github.com/nestcollective/si2017-project.git

### 2) ENV file (optional)
  There is an example-env file, rename it to .env

  Port: Uncomment and change port value if you run more than a Rails instance

    PORT = 4000 (ex.) - Assuming the main rails app is running on the default port (3000)

  Docker Database cfg: Edit if you need/want to use Docker to 'containerize' PostgreSQL

    DATABASE_USER=si17
    DATABASE_PASSWORD=si17
    DATABASE_HOST=localhost or 192.168.99.100 (Generic docker version uses a VM static ip)
    DATABASE_PORT=5434 (if you run more than a Postgres container it's a good idea to change this for a value different than 5432 - the default Postgres port)

### 3) Install dependencies - Bundle
  Run:

    $ bundle

### 4) Setup database
  Run:

    $ rails db:setup

### 5) Start rails server
  Run:

    $ rails s [-b 0.0.0.0] (optional)

### 6) Install dependencies - Frontend/Node
  Run:

    $ cd frontend && yarn

### 7) Start development server
  Run:

    $ yarn start


## Development

### Git flow

New branches must be created from the most recent `master` with the following convention `si17-XXX` where `XXX` is the matching trello card number.

Make sure the feature you just developed has all the necessary tests before committing your work. This applies to both frontend and backend tasks.

Commits must follow this structure `si17-XXX: description of what was done in this commit`.

Before starting a new task please CR open PRs. After merging PRs delete merged branch.

### Git commands

`cd mysi17`

`git checkout master`

`git pull`

`git checkout -b si17-XXX`

`git add <file>` OR `git add -A`

`git commit -m "si17-XXX: description of what was done in this commit"`

`git push -u origin si17-XXX`


## Testing

We are using [RSpec](http://rspec.info/) for testing our code (Ruby/Rails), along with other
utility gems.

  Run tests:

    $ rspec

We are using [Jest](https://facebook.github.io/jest/) for JS Unit Tests.

  Run tests:

    $ yarn test

## Code styling

We are enforcing custom styling for `Ruby`, `Javascript` and `SASS`. Use upcoming tools to harmonize the code before commiting new changes.

### Ruby

For Ruby we are using [Rubocop](https://github.com/bbatsov/rubocop), a ruby gem that lints our code.

This project adopts [Ruby Style Guide from Airbnb](https://github.com/airbnb/ruby)
To use it, run the following command in project root:

    $ rubocop

### Javascript

For Javascript we are using tool named [ESLint](http://eslint.org/).

To use it, run the following command in project root:

    $ yarn lint


### Stylesheet

For SASS follow all suggestions in file `style.guide`.
