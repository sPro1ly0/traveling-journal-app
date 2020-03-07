const users = [
  {   
    id: 1,
    fullName: 'John Doe',
    email: 'example@mail.com',
    password: 'password'
  },
  {
    id: 2,
    fullName: 'Jane Lane',
    email: 'jl3le@mail.com',
    password: 'password1'
  },
  {
    id: 3,
    fullName: 'Bob Roe',
    email: 'bos9i8e@mail.com',
    password: 'password2'
  },
  {
    id: 4,
    fullName: 'Luke Sky',
    email: 'skywalker2@mail.com',
    password: 'password4orce'
  },
];

const journals = [
  {
    id: 1,
    title: 'Spanish Delight',
    location: 'Madrid, Spain',
    startDate: 'Wed Jun 05 2019 20:00:00 GMT-0400 (Eastern Daylight Time)',
    endDate: 'Thu Jun 06 2019 20:00:00 GMT-0400 (Eastern Daylight Time)',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    authorId: 1
  },
  {
    id: 2,
    title: 'Fun Day in Florida',
    location: 'Miami, Florida',
    startDate: 'Fri Jan 11 2019 19:00:00 GMT-0500 (Eastern Standard Time)',
    endDate: 'Fri Jan 12 2019 19:00:00 GMT-0500 (Eastern Standard Time)',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    authorId: 1
  },
  {
    id: 3,
    title: 'Beauty of Italy',
    location: 'Rome, Italy',
    startDate: 'Mon Feb 10 2020 12:00:00 GMT-0500 (Eastern Standard Time)',
    endDate: 'Fri Feb 14 2020 12:00:00 GMT-0500 (Eastern Standard Time)',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    authorId: 4
  },
  {
    id: 4,
    title: 'Disney World',
    location: 'Orlando, Florida',
    startDate: 'Tue Jul 02 2019 20:00:00 GMT-0400 (Eastern Daylight Time)',
    endDate: 'Tue Jul 09 2019 20:00:00 GMT-0400 (Eastern Daylight Time)',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    authorId: 3
  },
  {
    id: 5,
    title: 'First day in Australia',
    location: 'Brisbane, Australia',
    startDate: 'Sun Apr 14 2019 20:00:00 GMT-0400 (Eastern Daylight Time)',
    endDate: 'Mon Apr 15 2019 20:00:00 GMT-0400 (Eastern Daylight Time)',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    authorId: 2
  },
];

const comments = [
  {   
    id: 1,
    text: 'Lorem ipsum dolor sit amet',
    journalId: 1,
    authorId: 2
  },
  {
    id: 2,
    text: 'Lorem ipsum dolor!',
    journalId: 1,
    authorId: 4
  },
  {
    id: 3,
    text: 'Lorem!',
    journalId: 4,
    authorId: 1
  },
  {
    id: 4,
    text: 'Lorem ipsum dolor sit amet, afsdfasdf',
    journalId: 3,
    authorId: 3
  },
  {
    id: 5,
    text: 'Wonderful! Amazing place!',
    journalId: 3,
    authorId: 3
  },
];

export { users, journals, comments };