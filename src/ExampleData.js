const users = [
    {   
        id: 1,
        firstName: "John",
        lastName: "Doe",
        email: "example@mail.com",
        password: "password"
    },
    {
        id: 2,
        firstName: "Jane",
        lastName: "Lane",
        email: "jl3le@mail.com",
        password: "password1"
    },
    {
        id: 3,
        firstName: "Bob",
        lastName: "Roe",
        email: "bos9i8e@mail.com",
        password: "password2"
    },
    {
        id: 4,
        firstName: "Luke",
        lastName: "Sky",
        email: "skywalker2@mail.com",
        password: "password4orce"
    },
];

const journals = [
    {
        id: 1,
        title: "Spanish Delight",
        location: "Madrid, Spain",
        date: "2019-06-06",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        authorId: 1
    },
    {
        id: 2,
        title: "Fun Day in Florida",
        location: "Miami, Florida",
        date: "2020-01-12",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        authorId: 1
    },
    {
        id: 3,
        title: "Beauty of Italy",
        location: "Rome, Italy",
        date: "2018-06-19",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        authorId: 4
    },
    {
        id: 4,
        title: "Disney World",
        location: "Orlando, Florida",
        date: "2019-07-03",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        authorId: 3
    },
    {
        id: 5,
        title: "First day in Australia",
        location: "Brisbane, Australia",
        date: "2019-04-05",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        authorId: 2
    },
];

const comments = [
    {   
        id: 1,
        text: "Lorem ipsum dolor sit amet",
        journalId: 1,
        authorId: 2
    },
    {
        id: 2,
        text: "Lorem ipsum dolor!",
        journalId: 1,
        authorId: 4
    },
    {
        id: 3,
        text: "Lorem!",
        journalId: 4,
        authorId: 1
    },
    {
        id: 4,
        text: "Lorem ipsum dolor sit amet, afsdfasdf",
        journalId: 3,
        authorId: 3
    },
    {
        id: 5,
        text: "Wonderful! Amazing place!",
        journalId: 3,
        authorId: 3
    },
];

export { users, journals, comments };