import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "wishlist",
  password: "akma1904",
  port: 5432,
});
db.connect();

app.get("/getWish", async (req, res) => {
  try {
    let result = await db.query("select * from wish order by id");
    // console.log(result.rows);
    res.json({ wishlist: result.rows });
  } catch (err) {
    console.log(err);
  }
});

app.post("/insertWish", async (req, res) => {
  const formdata = req.body;
  try {
    let insertRows = await db.query(
      "insert into wish (wishtitle,wishcategory,wishdate,wishdesc,isbookmarked,iscompleted) values($1,$2,$3,$4,$5,$6)",
      [
        formdata.title,
        formdata.category,
        formdata.date,
        formdata.description,
        formdata.bookmarked,
        formdata.completed,
      ]
    );

    let result = await db.query("select * from wish order by id");
    // console.log(result.rows);
    res.json({ wishlist: result.rows });
  } catch (err) {
    console.log(err);
  }
});

app.post("/toggleBookmark", async (req, res) => {
  const formdata = await req.body;
  console.log(formdata);
  try {
    let update = await db.query(
      "update wish set isbookmarked = $1 where id = $2",
      [formdata.isbookmarked, formdata.id] //specify
    );

        let result = await db.query("select * from wish order by id");
    res.json({ wishlist: result.rows });
  } catch (err) {
    console.log(err);
  }
});

app.post("/toggleComplete", async (req, res) => {
  const formdata = await req.body;
  console.log(formdata);
  try {
    let update = await db.query(
      "update wish set iscompleted = $1 where id = $2",
      [formdata.iscompleted, formdata.id]
    );
let result = await db.query("select * from wish order by id");
    

    res.json({ wishlist: result.rows });
  } catch (err) {
    console.log(err);
  }
});



app.put("/deleteWish", async (req, res) => {
  const formdata = await req.body;
  console.log(formdata);
  try {
    let deleted = await db.query(
      "delete from wish where id = $1",
      [formdata.id] //specify
    );

    let result = await db.query("select * from wish order by id");
    res.json({ wishlist: result.rows });
  } catch (err) {
    console.log(err);
  }
});

app.listen("5000", () => {
  console.log("Server is running in port " + 5000);
});
