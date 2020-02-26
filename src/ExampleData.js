const users = [
    {
        firstName: "John",
        lastName: "Doe",
        email: "example@mail.com",
        password: "password"
    },
    {
        firstName: "Jane",
        lastName: "Lane",
        email: "jl3le@mail.com",
        password: "password1"
    },
    {
        firstName: "Bob",
        lastName: "Roe",
        email: "bos9i8e@mail.com",
        password: "password2"
    },
    {
        firstName: "Luke",
        lastName: "Sky",
        email: "skywalker2@mail.com",
        password: "password4orce"
    },
];

const journals = [
    {
        title: "Spanish Delight",
        location: "Madrid, Spain",
        date: "June 2019",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        author: "John Doe"
    },
    {
        title: "Fun Day in Florida",
        location: "Miami, Florida",
        date: "January 2020",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        author: "John Doe"
    },
    {
        title: "Beauty of Italy",
        location: "Rome, Italy",
        date: "June 2018",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        author: "Luke Sky"
    },
    {
        title: "Disney World",
        location: "Orlando, Florida",
        date: "July 2019",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        author: "Bob Roe"
    },
    {
        title: "First day in Australia",
        location: "Brisbane, Australia",
        date: "April 2019",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        author: "Jane Lane"
    },
];

const comments = [
    {
        comment: "Lorem ipsum dolor sit amet",
        journalTitle: "Spanish Delight",
        author: "Jane Lane"
    },
    {
        comment: "Lorem ipsum dolor!",
        journalTitle: "Spanish Delight",
        author: "Luke Sky"
    },
    {
        comment: "Lorem!",
        journalTitle: "Disney World",
        author: "John Doe"
    },
    {
        comment: "Lorem ipsum dolor sit amet, afsdfasdf",
        journalTitle: "Beauty of Italy",
        author: "Bob Roe"
    },
];

export default { users, journals, comments };