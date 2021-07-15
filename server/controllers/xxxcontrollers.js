/* eslint-disable max-len */
/* eslint-disable indent */
// const db = require('../../db/index');

const controllers = {
  // *************************************************************
  // ADD A NEW USER
  // *************************************************************
    // Needs from Front End - street address, city, state, zipcode, neighborhood (optional), coordinate (from GoogleMaps API), first name, last name, password, email, imgUrl (optional)
    // Returns - String confirmation
  // *************************************************************
  /*
    POST /api/user
      req.body =
      {
        "streetAddress": "450 Grundle Lane",
        "city": "Los Angeles",
        "state": "CA",
        "zipcode": 87980,
        "neighborhood": "Pasadena",
        "firstName": "George",
        "lastName": "Kentucky",
        "password": "431jkl",
        "email": "georgek@gmail.com",
        "imgUrl": "https://uknow.uky.edu/sites/default/files/styles/uknow_story_image/public/externals/e9e2133396fc318d7b991696e8404c58.jpg"
      }
    res = "User added to db"
  */
  // addUser: (req, res) => {
  //   const {
  //     streetAddress,
  //     city,
  //     state,
  //     zipcode,
  //     neighborhood,
  //     firstName,
  //     lastName,
  //     password,
  //     email,
  //     imgUrl,
  //   } = req.body;

  //   // NEED TO FIGURE OUT COORDINATE (HOW TO GET FROM GMAPS API, FRONT OR BACK)
  //   // NEED TO FIGURE OUT ACCT_CREATED TIMESTAMP
  //   const queryStr = `
  //     WITH X AS (
  //       INSERT INTO nexdoor.address (
  //         street_address,
  //         city,
  //         state,
  //         zipcode,
  //         neighborhood,
  //       )
  //       VALUES (
  //         '${streetAddress}',
  //         '${city}',
  //         '${state}',
  //         ${zipcode},
  //         '${neighborhood}',
  //       )
  //       RETURNING address_id
  //     )
  //     INSERT INTO nexdoor.users (
  //       firstname,
  //       lastname,
  //       password,
  //       email,
  //       address_id,
  //       karma,
  //       task_count,
  //       avg_rating,
  //       profile_picture_url,
  //       acct_created_timestamp
  //     )
  //     SELECT
  //       '${firstName}',
  //       '${lastName}',
  //       '${password}',
  //       '${email}',
  //       address_id,
  //       0,
  //       0,
  //       null,
  //       '${imgUrl}',
  //       (SELECT CURRENT_TIMESTAMP)
  //     FROM X;
  //   `;

  //   db.query(queryStr)
  //     .then(() => {
  //       res.status(200).send('User added to db');
  //     })
  //     .catch((err) => {
  //       res.status(400).send(err.stack);
  //     });
  // },
  // *************************************************************

  // *************************************************************
  // ADD TASK WITH NEW ADDRESS (i.e not the user's home address)
  // *************************************************************
    // Needs from Front End - userId, street address, city, state, zipcode, coordinate (from GoogleMaps API), description, car required (optional), labor required (optional), category, start date, end date, start time, duration,
    // Returns - String confirmation
  // *************************************************************
  // POST api/task/new/${userId}
  /* req.body =
  {
    "streetAddress": "111 Random Street",
    "city": "Los Angeles",
    "state": "CA",
    "zipcode": 12345,
    "neighborhood": "Hollywood",
    "description": "Hoping to borrow 2 lawnchairs",
    "carRequired": false,
    "laborRequired": false,
    "category": "borrow",
    "date": "08/10/2021",
    "time": "5:08",
    "dateRequested": "08/10/2021",
    "timeRequested": "11:38",
    "duration": 2
  }
  res = 'Added task to db'
  */
 // *************************************************************
  // addTaskNewAddress: (req, res) => {
  //   const { userId } = req.params;
  //   const {
  //     streetAddress,
  //     city,
  //     state,
  //     zipcode,
  //     neighborhood,
  //     description,
  //     carRequired,
  //     laborRequired,
  //     category,
  //     date,
  //     time,
  //     dateRequested,
  //     timeRequested,
  //     duration,
  //   } = req.body;

  //   // NEED TO FIGURE OUT COORDINATE (HOW TO GET FROM GMAPS API, FRONT OR BACK)
  //   const queryStr = `
  //     WITH X AS (
  //       INSERT INTO nexdoor.address (
  //         street_address,
  //         city,
  //         state,
  //         zipcode,
  //         neighborhood,
  //       )
  //       VALUES (
  //         '${streetAddress}',
  //         '${city}',
  //         '${state}',
  //         ${zipcode},
  //         '${neighborhood}',
  //       )
  //       RETURNING address_id
  //     )
  //     INSERT INTO nexdoor.tasks (
  //       requester_id,
  //       location_id,
  //       description,
  //       car_required,
  //       physical_labor_required,
  //       status,
  //       category,
  //       date,
  //       time,
  //       date_requested,
  //       time_requested,
  //       duration
  //     )
  //     SELECT
  //       ${userId},
  //       address_id,
  //       '${description}',
  //       ${carRequired},
  //       ${laborRequired},
  //       'open',
  //       '${category}',
  //       '${date}',
  //       '${time}',
  //       '${dateRequested}',
  //       '${timeRequested}',
  //       ${duration}
  //     FROM X;
  //   `;

  //   db.query(queryStr)
  //     .then(() => {
  //       res.status(200).send('Added task to db');
  //     })
  //     .catch((err) => {
  //       res.status(400).send(err.stack);
  //     });
  // },
  // *************************************************************

  // *************************************************************
  // ADD A TASK AT A USER'S HOME ADDRESS
  // *************************************************************

  // *************************************************************
  /*
    POST api/task/home/${userId}
    req.body = {
      "description": "Can somebody help me put up a fence please",
      "carRequired": false,
      "laborRequired": true,
      "category": "labor",
      "date": "05/13/2021",
      "time": "10:08",
      "dateRequested": "05/04/2021",
      "timeRequested": "09:08",
      "duration": 1
      }
      res = 'Added task to db'
  */
 // *************************************************************
  // addTaskHomeAddress: (req, res) => {
  //   const { id } = req.params;

  //   const {
  //     description,
  //     carRequired,
  //     laborRequired,
  //     category,
  //     date,
  //     time,
  //     dateRequested,
  //     timeRequested,
  //     duration,
  //   } = req.body;

  //   const queryStr = `
  //     INSERT INTO nexdoor.tasks (
  //       requester_id,
  //       location_id,
  //       description,
  //       car_required,
  //       physical_labor_required,
  //       status,
  //       category,
  //       date,
  //       time,
  //       date_requested,
  //       time_requested,
  //       duration
  //     ) VALUES (
  //       ${id},
  //       (
  //         SELECT address_id
  //         FROM nexdoor.users
  //         WHERE user_id=${id}
  //       ),
  //       '${description}',
  //       ${carRequired},
  //       ${laborRequired},
  //       'open', '${category}',
  //       '${date}',
  //       '${time}',
  //       '${dateRequested}',
  //       '${timeRequested}',
  //       ${duration}
  //     );
  //   `;

  //   db.query(queryStr)
  //     .then(() => {
  //       res.status(200).send('Added task to db');
  //     })
  //     .catch((err) => {
  //       res.status(400).send(err.stack);
  //     });
  // },
  // *************************************************************

  // *************************************************************
  // ADD A MESSAGE
  // *************************************************************
    // Needs from Front End - taskId, userId, messageBody
    // Returns - String confirmation
  // *************************************************************
  /*
    POST /api/messages/5/3
    req.body = {
      "messageBody": "I\u0027m going out of town",
      "date": "06/13/2021",
      "time": "04:21"
    }
    res = 'Added message to db'
  */
 // *************************************************************
  // addMessage: (req, res) => {
  //   const { taskId, userId } = req.params;
  //   const { messageBody, date, time } = req.body;
  //   const queryStr = `
  //     INSERT INTO nexdoor.messages (
  //       task_id,
  //       user_id,
  //       message_body,
  //       date,
  //       time)
  //     VALUES (
  //       ${taskId},
  //       ${userId},
  //       '${messageBody}',
  //       '${date}',
  //       '${time}'
  //     );
  //   `;
  //   db.query(queryStr)
  //     .then(() => {
  //       res.status(200).send('Added message to db');
  //     })
  //     .catch((err) => {
  //       res.status(400).send(err.stack);
  //     });
  // },
  // *************************************************************

  // *************************************************************
  // ADD ANNOUNCEMENT
  // *************************************************************
    // Needs from Front End - UserId (optional), defaults to null
    // Returns - String confirmation
  // *************************************************************
  /*
    POST api/announce/${userId}
    req.body = {
      "announcementBody": "There was a robbery at 123 East Main Street last night",
      "date": "10/17/2020",
      "time": "05:25"
    }
    res = 'Added announcement to db'
  */
 // *************************************************************
  // addAnnouncement: (req, res) => {
  //   const { userId } = req.params || null;

  //   const {
  //     announcementBody,
  //     date,
  //     time,
  //   } = req.body;

  //   const queryStr = `
  //     INSERT INTO nexdoor.announcements (
  //       user_id,
  //       announcement_body,
  //       date,
  //       time
  //     )
  //     VALUES (
  //       ${userId},
  //       '${announcementBody}',
  //       '${date}',
  //       '${time}'
  //     )
  //   `;

  //   db.query(queryStr)
  //     .then(() => {
  //       res.status(200).send('Added announcement to db');
  //     })
  //     .catch((err) => {
  //       res.status(400).send(err.stack);
  //     });
  // },
  // *************************************************************

  // *************************************************************
  // GET USER INFO BY USERID
  // *************************************************************
    // Needs from Front End - userId
    // Returns - user object for given ID
  // *************************************************************
  /*
    GET /api/user/${userId}
    req.body = none;
    res = {
      "firstname": "Spongebob",
      "lastname": "Squarepants",
      "email": "ss@gmail.com",
      "karma": 0,
      "task_count": 0,
      "avg_rating": 5,
      "profile_picture_url": "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1200px-SpongeBob_SquarePants_character.svg.png",
      "address": {
          "street_address": "538 Newcastle",
          "city": "Los Angeles",
          "state": "CA",
          "zipcode": "90028",
          "neighborhood": "Los Feliz"
      }
  */
 // *************************************************************
  // getUser: (req, res) => {
  //   const { userId } = req.params;

  //   const queryStr = `
  //     SELECT
  //       firstname,
  //       lastname,
  //       email,
  //       karma,
  //       task_count,
  //       avg_rating,
  //       profile_picture_url, (
  //         SELECT ROW_TO_JSON(add)
  //         FROM (
  //           SELECT
  //             street_address,
  //             city,
  //             state,
  //             zipcode,
  //             neighborhood
  //           FROM nexdoor.address
  //           WHERE address_id=nexdoor.users.address_id
  //         ) add
  //       ) as address
  //     FROM nexdoor.users
  //     WHERE user_id=${userId};
  //   `;

  //   db.query(queryStr)
  //     .then((data) => {
  //       res.status(200).send(data.rows[0]);
  //     })
  //     .catch((err) => {
  //       res.status(400).send(err.stack);
  //     });
  // },
  // *************************************************************

  // *************************************************************
  // GET USERS BY RATING
  // *************************************************************
    // Needs from front end - max quantity of results, defaults to 10
    // Returns - array of user objects, ordered by user's average rating
  // *************************************************************
  /*
    GET /users/rating/${quantity}
    req.body = none
    res =
      [
        {
            "user_id": 3,
            "firstname": "andrew",
            "lastname": "munoz",
            "password": "testing123",
            "email": "testing123@gmail.com",
            "address_id": 1,
            "karma": 0,
            "task_count": 0,
            "avg_rating": 5,
            "profile_picture_url": "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1200px-SpongeBob_SquarePants_character.svg.png"
        },
        .......
      ]
  */
 // *************************************************************
  // getUsersByRating: (req, res) => {
  //   const { quantity } = req.params || 25;
  //   const queryStr = `
  //     SELECT *
  //     FROM nexdoor.users
  //     ORDER BY avg_rating
  //     LIMIT ${quantity}
  //   `;
  //   db.query(queryStr)
  //     .then((data) => {
  //       res.status(200).send(data.rows);
  //     })
  //     .catch((err) => {
  //       res.status(400).send(err.stack);
  //     });
  // },
  // *************************************************************

  // *************************************************************
  // GET ALL TASKS (LIMIT 100)
  // *************************************************************
    // Needs from Front End - none
    // Returns - array of task objects, ordered by start date and start time
  // *************************************************************
  /*


  // ADD WHOLE USER OBJECT (WITH ID) TO REQUESTER_NAME
    GET /api/tasks
    [
      {
        "task_id": 1,
        "requester_name": {
            "firstname": "Tom",
            "lastname": "Jones"
        },
        "helper_name": null,
        "location": {
            "street_address": "58901 Chumbly Court",
            "city": "Los Angeles",
            "state": "CA",
            "zipcode": "90005",
            "neighborhood": "Downtown"
        },
        "description": "Need someone to help me move a couch",
        "car_required": true,
        "physical_labor_required": "true",
        "status": "open",
        "category": "labor",
        "date": "2021-02-03T08:00:00.000Z",
        "time": "05:17:00",
        "date_requested": "2021-07-21T07:00:00.000Z",
        "time_requested": "08:41:00",
        "duration": 2
      },
    ]
  */
 // *************************************************************
  // getTasks: (req, res) => {
  //   const queryStr = `
  //     SELECT
  //       task_id,
  //       (
  //         SELECT ROW_TO_JSON(reqname)
  //         FROM (
  //           SELECT firstname, lastname
  //           FROM nexdoor.users
  //           WHERE nexdoor.users.user_id=nexdoor.tasks.requester_id
  //         ) reqname
  //       ) AS requester_name,
  //       (
  //         SELECT ROW_TO_JSON(helpname)
  //         FROM (
  //           SELECT firstname, lastname
  //           FROM nexdoor.users
  //           WHERE nexdoor.users.user_id=nexdoor.tasks.helper_id
  //         ) helpname
  //       ) AS helper_name,
  //       (
  //         SELECT ROW_TO_JSON(loc)
  //         FROM (
  //           SELECT street_address, city, state, zipcode, neighborhood
  //           FROM nexdoor.address
  //           WHERE address_id=nexdoor.tasks.address_id
  //         ) loc
  //       ) AS location,
  //       description,
  //       car_required,
  //       physical_labor_required,
  //       status,
  //       category,
  //       date,
  //       time,
  //       date_requested,
  //       time_requested,
  //       duration
  //     FROM nexdoor.tasks
  //     ORDER BY
  //       start_date,
  //       start_time
  //     LIMIT 100;
  //   `;
  //   db.query(queryStr)
  //     .then((data) => {
  //       res.status(200).send(data.rows);
  //     })
  //     .catch((err) => {
  //       res.status(400).send(err.stack);
  //     });
  // },
  // *************************************************************

  // *************************************************************
  // GET TASKS IN RANGE
  // *************************************************************
    // Needs from Front End - UserId(int), Range(in miles)(int or float)
    // Return - Array of task objects, each returned task object falls within
    //   the given range in miles from the given userId's home address, array is sorted
    //   by starting date and time
  // *************************************************************
  /*
    GET /api/tasks/:userId/:range(in miles)
    req.body = none
    res =
      [
        {
            "task_id": 13,
            "requester_name": {
                "firstname": "Jenny",
                "lastname": "Cho"
            },
            "helper_name": null,
            "address": {
                "street_address": "8737 Ashcroft Ave",
                "city": "West Hollywood",
                "state": "CA",
                "zipcode": 90048,
                "neighborhood": "West Hollywood"
            },
            "coordinate": {
                "x": -118.38298,
                "y": 34.07903
            },
            "description": "In need of a house sitter for 2 to 3 months",
            "car_required": null,
            "physical_labor_required": null,
            "status": "open",
            "category": "sitting",
            "start_date": "2021-04-21T07:00:00.000Z",
            "start_time": "12:30:00",
            "duration": 24,
            "timestamp_requested": "2021-07-14T09:36:16.418Z"
      },
      .......
    ]
  */
  // *************************************************************
  // getTasksInRange: (req, res) => {
  //   const { userId, range } = req.params;

  //   const queryStr = `
  //     SELECT
  //       task_id,
  //       (
  //         SELECT ROW_TO_JSON(reqname)
  //         FROM (
  //           SELECT firstname, lastname
  //           FROM nexdoor.users
  //           WHERE nexdoor.users.user_id=nexdoor.tasks.requester_id
  //         ) reqname
  //       ) AS requester_name,
  //       (
  //         SELECT ROW_TO_JSON(helpname)
  //         FROM (
  //           SELECT firstname, lastname
  //           FROM nexdoor.users
  //           WHERE nexdoor.users.user_id=nexdoor.tasks.helper_id
  //         ) helpname
  //       ) AS helper_name,
  //       (
  //         SELECT ROW_TO_JSON(loc)
  //         FROM (
  //           SELECT street_address, city, state, zipcode, neighborhood
  //           FROM nexdoor.address
  //           WHERE address_id=nexdoor.tasks.address_id
  //         ) loc
  //       ) AS address,
  //       (
  //         SELECT coordinate
  //         FROM nexdoor.address
  //         WHERE address_id=nexdoor.tasks.address_id
  //       ) AS coordinate,
  //       description,
  //       car_required,
  //       physical_labor_required,
  //       status,
  //       category,
  //       start_date,
  //       start_time,
  //       duration,
  //       timestamp_requested
  //     FROM nexdoor.tasks
  //     WHERE (
  //       (
  //         SELECT coordinate
  //         FROM nexdoor.address
  //         WHERE address_id=nexdoor.tasks.address_id
  //       )
  //       <@>
  //       (
  //         SELECT coordinate
  //         FROM nexdoor.address
  //         WHERE address_id=
  //           (
  //             SELECT address_id
  //             FROM nexdoor.users
  //             WHERE user_id=${userId}
  //           )
  //         ) < ${range}
  //       )
  //     ORDER BY
  //       start_date,
  //       start_time
  //     LIMIT 100;
  //   `;

  //   db.query(queryStr)
  //     .then((data) => {
  //       res.status(200).send(data.rows);
  //     })
  //     .catch((err) => {
  //       res.status(400).send(err.stack);
  //     });
  // },
  // *************************************************************

  // *************************************************************
  // GET MESSAGES BY TASKID
  // *************************************************************
  /*
    GET /api/messages/${taskId}
    req.body = none
    res = [
      {
        "firstname": "andrew",
        "lastname": "munoz",
        "message_body": "where are you",
        "date": "2021-06-13T07:00:00.000Z",
        "time": "04:51:00"
    },
    {
        "firstname": "Spongebob",
        "lastname": "Squarepants",
        "message_body": "i have no idea where i am",
        "date": "2021-04-13T07:00:00.000Z",
        "time": "06:21:00"
      },
    ]
  */
//  // *************************************************************
//   getMessagesByTask: (req, res) => {
//     const { taskId } = req.params;
//     const queryStr = `
//       SELECT
//         firstname,
//         lastname,
//         message_body,
//         date,
//         time
//       FROM
//         nexdoor.messages
//       INNER JOIN
//         nexdoor.users
//         ON nexdoor.users.user_id=nexdoor.messages.user_id
//       WHERE
//         task_id=${taskId};
//     `;
//     db.query(queryStr)
//       .then((data) => {
//         res.status(200).send(data.rows);
//       })
//       .catch((err) => {
//         res.status(400).send(err.stack);
//       });
//   },
  // *************************************************************

  // *************************************************************
  // CHECK FOR EMAIL
  // *************************************************************
  /*
    GET /api/email
    req.body = {
      "email": "ss@gmail.com"
    }
    res = true
    req.body = {
      "email": "thisemaildoesntexistindb@gmail.com"
    }
    res = false
  */
 // *************************************************************
  // checkForEmail: (req, res) => {
  //   const { email } = req.body;
  //   const queryStr = `
  //     SELECT EXISTS (
  //       SELECT true FROM nexdoor.users
  //       WHERE email='${email}'
  //       LIMIT 1
  //     )
  //   `;
  //   db.query(queryStr)
  //     .then((data) => {
  //       res.status(200).send(data.rows[0].exists);
  //     })
  //     .catch((err) => {
  //       res.status(400).send(err.stack);
  //     });
  // },
  // *************************************************************

};

module.exports = controllers;

// GET TASKS FOR A GIVEN USER
  // REQUESTED TASKS
  // HELPER TASKS
// GET TASK BY TASK ID - May be solveable on front
// GET to get user's password and email
// task modifier query to change task status and add helper id
// add task adder that checks for the address first
// separate date with start and end date
// look into S3 for photo storage