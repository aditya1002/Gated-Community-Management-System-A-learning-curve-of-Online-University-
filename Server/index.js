const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const { Redirect } = require("react-router");
var qs = require('qs');
const app = express();
app.use(express.json());
app.use(cors());


const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"loginsystem"

});
db.connect(function(err){
    if(err) throw err;
       console.log("database Connected");
   })
   var todatel
   app.get("/getExpendituredata/:newfromdate",(req,res)=>{
    const date2= req.params.newfromdate;
    const date1 = todatel
    var CurrentDate = new Date(date1);
    CurrentDate.setMonth(CurrentDate.getMonth() - 1);
    const date3= CurrentDate
    console.log(date3);
    console.log(date1);
    db.query("SELECT SUM(amount) AS totalexpenditure FROM expenditure WHERE date BETWEEN ? AND ?",[date2,date3],(err,result)=>{
        var data = Object.values(JSON.parse(JSON.stringify(result)))
        console.log(data);
        res.send(data);

    });
});

   app.get("/getIncomedata/:newfromdate",(req,res)=>{
    const date2= req.params.newfromdate;
    const date1 = todatel
    var CurrentDate = new Date(date1);
    CurrentDate.setMonth(CurrentDate.getMonth() - 1);
    const date3= CurrentDate
    console.log(date3);
    console.log(date1);
    db.query("SELECT SUM(amount) AS totalincome FROM income WHERE date BETWEEN ? AND ?",[date2,date3],(err,result)=>{
        var data = Object.values(JSON.parse(JSON.stringify(result)))
        console.log(data);
        res.send(data);

    });
});
app.get("/getmonthIncome/:newfromdate",(req,res)=>{
    const date2= req.params.newfromdate;
    var CurrentDate = new Date(date2);
    CurrentDate.setMonth(CurrentDate.getMonth() + 1);
    console.log("Date after " + 1 + " month:", CurrentDate);
    const date1 = CurrentDate
    console.log(date1);
    console.log(date2);
   db.query("SELECT type,amount FROM income WHERE date BETWEEN ? AND ? ; ",[date2,date1],(err,result)=>{
    var data = Object.values(JSON.parse(JSON.stringify(result)))
       if(err) console.log(err);
      console.log(data);
       res.send(data);

   });
});
app.get("/getIncomemonthtotal/:newfromdate",(req,res)=>{
    const date2= req.params.newfromdate;
    var CurrentDate = new Date(date2);
    CurrentDate.setMonth(CurrentDate.getMonth() + 1);
    console.log("Date after " + 1 + " month:", CurrentDate);
    const date1 = CurrentDate
    console.log(date1);
    console.log(date2);
   db.query("SELECT SUM(amount) AS totalincome FROM income WHERE date BETWEEN ? AND ? ; ",[date2,date1],(err,result)=>{
    var data = Object.values(JSON.parse(JSON.stringify(result)))
       if(err) console.log(err);
      console.log(data);
       res.send(data);

   });
});
app.get("/getmonthExpenditure/:newfromdate",(req,res)=>{
    const date2= req.params.newfromdate;
    var CurrentDate = new Date(date2);
    CurrentDate.setMonth(CurrentDate.getMonth() + 1);
    console.log("Date after " + 1 + " month:", CurrentDate);
    const date1 = CurrentDate
    console.log(date1);
    console.log(date2);
   db.query("SELECT type,amount FROM expenditure WHERE date BETWEEN ? AND ? ; ",[date2,date1],(err,result)=>{
    var data = Object.values(JSON.parse(JSON.stringify(result)))
       if(err) console.log(err);
      console.log(data);
       res.send(data);

   });
});

app.get("/getExpendituremonthtotal/:newfromdate",(req,res)=>{
    const date2= req.params.newfromdate;
    var CurrentDate = new Date(date2);
    CurrentDate.setMonth(CurrentDate.getMonth() + 1);
    console.log("Date after " + 1 + " month:", CurrentDate);
    const date1 = CurrentDate
    console.log(date1);
    console.log(date2);
   db.query("SELECT SUM(amount) AS totalexpenditure FROM expenditure WHERE date BETWEEN ? AND ? ; ",[date2,date1],(err,result)=>{
    var data = Object.values(JSON.parse(JSON.stringify(result)))
       if(err) console.log(err);
      console.log(data);
       res.send(data);

   });
});
   app.get("/Balancesheetmonth/:newfromdate",(req,res)=>{
    const date2= req.params.newfromdate;
    var CurrentDate = new Date(date2);
    CurrentDate.setMonth(CurrentDate.getMonth() + 1);
    console.log("Date after " + 1 + " months:", CurrentDate);
    const date1 = CurrentDate 
    console.log(date1);
    console.log(date2);
   db.query("SELECT SUM(balance) AS balance FROM bankbalance WHERE date BETWEEN ? AND ?  ",[date2,date1],(err,result)=>{
    var data = Object.values(JSON.parse(JSON.stringify(result)))
       if(err) console.log(err);
      console.log(data);
       res.send(data);

   });
});
app.get("/getyearExpenditure/:newfromdate",(req,res)=>{
    const date2= req.params.newfromdate;
    var CurrentDate = new Date(date2);
    CurrentDate.setMonth(CurrentDate.getMonth() + 12);
    console.log("Date after " + 1 + " month:", CurrentDate);
    const date1 = CurrentDate
    console.log(date1);
    console.log(date2);
   db.query("SELECT type,amount FROM expenditure WHERE date BETWEEN ? AND ? ; ",[date2,date1],(err,result)=>{
    var data = Object.values(JSON.parse(JSON.stringify(result)))
       if(err) console.log(err);
      console.log(data);
       res.send(data);

   });
});

app.get("/getExpenditureyeartotal/:newfromdate",(req,res)=>{
    const date2= req.params.newfromdate;
    var CurrentDate = new Date(date2);
    CurrentDate.setMonth(CurrentDate.getMonth() + 12);
    console.log("Date after " + 12 + " month:", CurrentDate);
    const date1 = CurrentDate
    console.log(date1);
    console.log(date2);
   db.query("SELECT SUM(amount) AS totalexpenditure FROM expenditure WHERE date BETWEEN ? AND ? ; ",[date2,date1],(err,result)=>{
    var data = Object.values(JSON.parse(JSON.stringify(result)))
       if(err) console.log(err);
      console.log(data);
       res.send(data);

   });
});
app.get("/getyearIncome/:newfromdate",(req,res)=>{
    const date2= req.params.newfromdate;
    var CurrentDate = new Date(date2);
    CurrentDate.setMonth(CurrentDate.getMonth() + 12);
    console.log("Date after " + 12 + " month:", CurrentDate);
    const date1 = CurrentDate
    console.log(date1);
    console.log(date2);
   db.query("SELECT type,amount FROM income WHERE date BETWEEN ? AND ? ; ",[date2,date1],(err,result)=>{
    var data = Object.values(JSON.parse(JSON.stringify(result)))
       if(err) console.log(err);
      console.log(data);
       res.send(data);

   });
});

app.get("/getIncomeyeartotal/:newfromdate",(req,res)=>{
    const date2= req.params.newfromdate;
    var CurrentDate = new Date(date2);
    CurrentDate.setMonth(CurrentDate.getMonth() + 12);
    console.log("Date after " + 12 + " month:", CurrentDate);
    const date1 = CurrentDate
    console.log(date1);
    console.log(date2);
   db.query("SELECT SUM(amount) AS totalincome FROM income WHERE date BETWEEN ? AND ? ; ",[date2,date1],(err,result)=>{
    var data = Object.values(JSON.parse(JSON.stringify(result)))
       if(err) console.log(err);
      console.log(data);
       res.send(data);

   });
});
   
app.get("/Balancesheetyear/:newfromdate",(req,res)=>{
    const date2= req.params.newfromdate;
    var CurrentDate = new Date(date2);
    CurrentDate.setMonth(CurrentDate.getMonth() + 12);
    console.log("Date after " + 12 + " month:", CurrentDate);
    const date1 = CurrentDate
    console.log(date1);
    console.log(date2);
   db.query("SELECT SUM(balance) AS balance FROM bankbalance WHERE date BETWEEN ? AND ? ; ",[date2,date1],(err,result)=>{
    var data = Object.values(JSON.parse(JSON.stringify(result)))
       if(err) console.log(err);
      console.log(data);
       res.send(data);

   });
});
app.get("/gethalfyearExpenditure/:newfromdate",(req,res)=>{
    const date2= req.params.newfromdate;
    var CurrentDate = new Date(date2);
    CurrentDate.setMonth(CurrentDate.getMonth() + 6);
    console.log("Date after " + 6+ " month:", CurrentDate);
    const date1 = CurrentDate
    console.log(date1);
    console.log(date2);
   db.query("SELECT type,amount FROM income WHERE date BETWEEN ? AND ? ; ",[date2,date1],(err,result)=>{
    var data = Object.values(JSON.parse(JSON.stringify(result)))
       if(err) console.log(err);
      console.log(data);
       res.send(data);

   });
});

app.get("/getExpenditurehalfyeartotal/:newfromdate",(req,res)=>{
    const date2= req.params.newfromdate;
    var CurrentDate = new Date(date2);
    CurrentDate.setMonth(CurrentDate.getMonth() + 6);
    console.log("Date after " + 16+ " month:", CurrentDate);
    const date1 = CurrentDate
    console.log(date1);
    console.log(date2);
   db.query("SELECT SUM(amount) AS totalexpenditure FROM expenditure WHERE date BETWEEN ? AND ? ; ",[date2,date1],(err,result)=>{
    var data = Object.values(JSON.parse(JSON.stringify(result)))
       if(err) console.log(err);
      console.log(data);
       res.send(data);

   });
});
app.get("/gethalfyearIncome/:newfromdate",(req,res)=>{
    const date2= req.params.newfromdate;
    var CurrentDate = new Date(date2);
    CurrentDate.setMonth(CurrentDate.getMonth() + 6);
    console.log("Date after " + 6+ " month:", CurrentDate);
    const date1 = CurrentDate
    console.log(date1);
    console.log(date2);
   db.query("SELECT type,amount FROM income WHERE date BETWEEN ? AND ? ; ",[date2,date1],(err,result)=>{
    var data = Object.values(JSON.parse(JSON.stringify(result)))
       if(err) console.log(err);
      console.log(data);
       res.send(data);

   });
});

app.get("/getIncomehalfyeartotal/:newfromdate",(req,res)=>{
    const date2= req.params.newfromdate;
    var CurrentDate = new Date(date2);
    CurrentDate.setMonth(CurrentDate.getMonth() + 6);
    console.log("Date after " + 16+ " month:", CurrentDate);
    const date1 = CurrentDate
    console.log(date1);
    console.log(date2);
   db.query("SELECT SUM(amount) AS totalincome FROM  income WHERE date BETWEEN ? AND ? ; ",[date2,date1],(err,result)=>{
    var data = Object.values(JSON.parse(JSON.stringify(result)))
       if(err) console.log(err);
      console.log(data);
       res.send(data);

   });
});

app.get("/Balancesheethalf/:newfromdate",(req,res)=>{
    const date2= req.params.newfromdate;
    var CurrentDate = new Date(date2);
    CurrentDate.setMonth(CurrentDate.getMonth() + 6);
    console.log("Date after " + 6 + " months:", CurrentDate);
    const date1 = CurrentDate
    console.log(date2);
   db.query("SELECT SUM(balance) AS balance FROM bankbalance WHERE date BETWEEN ? AND ? ; ",[date2,date1],(err,result)=>{
    var data = Object.values(JSON.parse(JSON.stringify(result)))
       if(err) console.log(err);
      console.log(data);
       res.send(data);

   });
});

   app.get("/Balancesheet/:newfromdate",(req,res)=>{
     const date2= req.params.newfromdate;
     const date1 = todatel
     var CurrentDate = new Date(date1);
     CurrentDate.setMonth(CurrentDate.getMonth() - 1);
     console.log("Final Date is ", CurrentDate);
     const date3= CurrentDate
     console.log();
    db.query("SELECT SUM(balance) AS balance FROM bankbalance WHERE date BETWEEN ? AND ? ; ",[date2,date3],(err,result)=>{
     var data = Object.values(JSON.parse(JSON.stringify(result)))
        if(err) console.log(err);
       console.log(data);
        res.send(data);

    });
});
app.post("/Balancesheet/todate", (req,res)=> {
    
    const todate = req.body.todate;
    todatel= todate;
     //console.log(commune)
    
   
});
   app.get("/Balancesheet",(req,res)=>{
    db.query("SELECT  DATE_FORMAT(date, '%Y-%m-%d') AS date FROM bankbalance  ",(err,result)=>{
        var data = Object.values(JSON.parse(JSON.stringify(result)))
       res.send(data);
    });
});
   app.post("/Bankbalance/insert", (req,res)=> {
    
    const date = req.body.date;
    const balance = req.body.balance;
     
    
    db.query("INSERT INTO bankbalance (date,balance) VALUES (?,?)",
     [date,balance],
     (err,result) => {
        console.log(err);
    }
    );
});
   app.put("/BankBalance/update", (req,res)=> {
    
    var today = new Date(),

    time = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getUTCDate();
    const date= req.body.date;
    const balance = req.body.balance;
    console.log(time);
    db.query("UPDATE  bankbalance SET balance=? WHERE date = ?",
     [balance,date],
     (err,result) => {
        console.log(err);
    }
    );
});
app.get("/Bankbalance/all",(req,res)=>{
    db.query("SELECT  DATE_FORMAT(date, '%Y-%m-%d') AS date FROM bankbalance ",(err,result)=>{
        var data = Object.values(JSON.parse(JSON.stringify(result)))
       res.send(data);
    });
});

   app.get("/Bankbalance",(req,res)=>{
    db.query("SELECT * FROM bankbalance ORDER BY date DESC LIMIT 1  ",(err,result)=>{
        var data = Object.values(JSON.parse(JSON.stringify(result)))
       res.send(data);
    });
});

app.get("/Userquery/:flatNo",(req,res)=>{
    const flatNo = req.params.flatNo;
 db.query("SELECT community,block,query,status FROM query WHERE flatNo = ? ",flatNo,(err,result)=>{
     var data = Object.values(JSON.parse(JSON.stringify(result)))
    res.send(data);
 });
});
   app.get("/Userprofile/:flatNo",(req,res)=>{
       const flatNo = req.params.flatNo;
    db.query("SELECT flatNo,community,block,type,amount FROM income WHERE flatNo = ?",flatNo,(err,result)=>{
        var data = Object.values(JSON.parse(JSON.stringify(result)))
        console.log(data);
       res.send(data);
    });
});
app.get("/ExpenditureOut/total",(req,res)=>{
    db.query("SELECT SUM(amount) as total FROM expenditure",(err,result)=>{
        var data = Object.values(JSON.parse(JSON.stringify(result)))
        console.log(data);
        res.send(data);

    });
});

app.get("/ExpenditureOut",(req,res)=>{
    db.query("SELECT * FROM expenditure",(err,result)=>{
        var data = Object.values(JSON.parse(JSON.stringify(result)))
        res.send(data);

    });
});
app.post("/Expenditure", (req,res)=> {
    var today = new Date(),

    time = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getUTCDate();
    
    const type = req.body.type;
    var amount = req.body.amount;
    const name = req.body.name;
    const eventdate = req.body.date;
    const reason = req.body.reason;
    db.query("INSERT INTO expenditure (type,amount,date,event,eventdate,purpose) VALUES (?,?,?,?,?,?)",
     [type,amount,time,name,eventdate,reason],
     (err,result) => {
        console.log(err);
    }
    );
});
app.get("/Incomeout/total",(req,res)=>{
    db.query("SELECT SUM(amount) as total FROM income",(err,result)=>{
        var data = Object.values(JSON.parse(JSON.stringify(result)))
        console.log(data);
        res.send(data);

    });
});
var checkmaintenance
var checkevent
var checksecurity
var checkcorpus
app.post("/Incomeout/checked", (req,res)=> {
     var checkmaintenance = req.check.maintenance;
     var checksecurity = req.body.security;
     var checkcorpus = req.body.event;
     var checkcorpus = req.body.corpus;
    console.log(checkmaintenance);
   
});
app.get("/Incomeout/total/sort",(req,res)=>{
    db.query("SELECT * from income WHERE type=? AND type=? ",(err,result)=>{
       
        //console.log(result);
        res.send(result);

    });
});


app.get("/Incomeout",(req,res)=>{
    db.query("SELECT * FROM income",(err,result)=>{
        var data = Object.values(JSON.parse(JSON.stringify(result)))
        res.send(data);

    });
});
   app.post("/Income", (req,res)=> {
    var today = new Date(),

    time = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getUTCDate();
    const flatNo= req.body.flatNo;
    const floor = req.body.floor;
    const Community= req.body.Community;
    const Block = req.body.Block;
    const area = req.body.area;
    const extras1 = req.body.extras1;
    const extras2 = req.body.extras2;
    const type = req.body.type;
    var amount = req.body.amount;
    if(type==='Maintenance'){
     
    const maintenance = area*2 + parseInt(extras2) + parseInt(extras1);
   JSON.stringify(maintenance)
   amount = maintenance
    console.log(maintenance)
    }
    db.query("INSERT INTO income (flatNo,floor,Community,Block,type,amount,date) VALUES (?,?,?,?,?,?,?)",
     [flatNo,floor,Community,Block,type,amount,time],
     (err,result) => {
        console.log(err);
    }
    );
});

app.get("/Queryrecieve/Blockrecieve2",(req,res)=>{
    db.query("SELECT email,query,flatNo,time,Block,status FROM query WHERE Block = 2 ",(err,result)=>{
        var data = Object.values(JSON.parse(JSON.stringify(result)))
       res.send(data);
    });
});
app.get("/Queryrecieve/Blockrecieve1",(req,res)=>{
    db.query("SELECT email,query,flatNo,time,Block,status FROM query WHERE Block = 1 ",(err,result)=>{
        var data = Object.values(JSON.parse(JSON.stringify(result)))
       res.send(data);
    });
});
app.get("/Queryrecieve/Communityrecieve2",(req,res)=>{
    db.query("SELECT email,query,flatNo,time,Community,status FROM query WHERE Community = 2 ",(err,result)=>{
        var data = Object.values(JSON.parse(JSON.stringify(result)))
       res.send(data);
    });
});
app.get("/Queryrecieve/Communityrecieve1",(req,res)=>{
    db.query("SELECT email,query,flatNo,time,Community,status FROM query WHERE Community = 1 ",(err,result)=>{
        var data = Object.values(JSON.parse(JSON.stringify(result)))
       res.send(data);
    });
});
app.put("/Queryrecieve/update", (req,res)=> {
    var today = new Date(),

    timeday = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getUTCDate();
    const query= req.body.query;
    const status = req.body.status;
    var time = timeday;
    console.log(time);
         


    db.query("UPDATE query SET status ='RESOLVED' WHERE query= ? ",
     [query,status],
     (err,result) => {
        console.log(err);
    }
    );
});




   app.get("/Queryrecieve",(req,res)=>{
    db.query("SELECT * FROM query ",(err,result)=>{
        var data = Object.values(JSON.parse(JSON.stringify(result)))
       res.send(data);
    });
});
   app.get("/Flatdetails",(req,res)=>{
    db.query("SELECT fullName,flatNO,Block,Community FROM user ORDER BY Community ",(err,result)=>{
       res.send(result);
    });
});
var commune 
   app.post("/Query", (req,res)=> {
    
    var today = new Date(),

    time = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getUTCDate();
    const email= req.body.email;
    const query = req.body.textarea;
    const flatNo = req.body.flatNo;
    const Community = req.body.Community;
    const Block = req.body.Block;
    var status = "Pending" 
    console.log(time);
    console.log(commune);
    db.query("INSERT INTO query (email,query,flatNo,time,Community,Block,status) VALUES (?,?,?,?,?,?,?)",
     [email,query,flatNo,time,Community,Block,status],
     (err,result) => {
        console.log(err);
    }
    );
});

   app.get("/Adminhome",(req,res)=>{
    db.query("SELECT COUNT (*) as total FROM user",(err,result)=>{
        
      var count= JSON.stringify(parseFloat(result[0].total));
       console.log(count);
       
    });
});


app.get("/Community",(req,res)=>{
    db.query("SELECT fullName,flatNO,email,Block,Community FROM user ORDER BY Community",(err,result)=>{
       res.send(result);
    });
});
app.delete("/Community/delete/:flatNo", (req,res)=> {
    
    const flatNo = req.params.flatNo;
    db.query("DELETE FROM user WHERE flatNo = ?",
     flatNo,
     (err,result) => {
        console.log(err);
    }
    );
});
app.put("/Community/update", (req,res)=> {
    
    const fullName= req.body.fullName;
    const flatNo = req.body.flatNo;
    const email = req.body.email;
   


    db.query("UPDATE user SET fullName =?, email=? WHERE flatNo=?",
     [fullName,email,flatNo],
     (err,result) => {
        console.log(err);
    }
    );
});
app.put("/Team/update", (req,res)=> {
    
    const fullName= req.body.name;
    const flatNo = req.body.flatNo;
    const email = req.body.email;
    const phone = req.body.phone;
    const designation = req.body.designation;


    db.query("UPDATE team SET name =?, email=?,phone=? WHERE designation=?",
     [fullName,email,flatNo,phone,designation],
     (err,result) => {
        console.log(err);
    }
    );
});

app.get("/Teamrecieve",(req,res)=>{
    db.query("SELECT * FROM team ",(err,result)=>{
        var data = Object.values(JSON.parse(JSON.stringify(result)))
       res.send(data);
    });
});
  
app.post("/Signup/Team", (req,res)=> {
    
    const fullName= req.body.fullName;
    const flatNo= req.body.flatNo;
    const email= req.body.email;
    const phone = req.body.phone;
    const designation = req.body.des;
    db.query("INSERT INTO team (name,flatNo,email,phone,designation) VALUES (?,?,?,?,?)",
     [fullName,flatNo,email,phone,designation],
     (err,result) => {
        console.log(err);
        var data = JSON.parse(JSON.stringify(err))
        res.send(data);
      
    }
    );
});
app.post("/Signup", (req,res)=> {
    
    const fullName= req.body.fullName;
    const flatNo= req.body.flatNo;
    const email= req.body.email;
    const username= req.body.username;
    const password= req.body.password;
    const Community= req.body.Community;
    const Block = req.body.Block;


    db.query("INSERT INTO user (fullName,flatNo,email,username,password,Community,Block) VALUES (?,?,?,?,?,?,?)",
     [fullName,flatNo,email,username,password,Community,Block],
     (err,result) => {
        console.log(err);
        var data = JSON.parse(JSON.stringify(err))
        res.send(data);
      
    }
    );
});
app.post("/Form",(req,res)=>{

    const username= req.body.username;
    const password= req.body.password;
   //const loggedin = true;

   if(username&&password){
    db.query("SELECT * FROM user WHERE username = ? AND password =?",
     [username,password],
     (err,result) => {
          if(err){
              res.send({err: err})
         }
        
         if(result.length>0){
             
            res.send(result);
            
         } else {
            res.send("Invalid")
         }
         
    }
    );

}
});
app.get("/Componentdetails/all",(req,res)=>{
    db.query("SELECT * FROM components ",(err,result)=>{
        var data = Object.values(JSON.parse(JSON.stringify(result)))
       res.send(data);
    });
});

app.get("/Componentdetail/:name",(req,res)=>{
    db.query("SELECT * FROM components ",(err,result)=>{
        var data = Object.values(JSON.parse(JSON.stringify(result)))
        res.send(data);
    });
});
var titlename
// app.post("/Component", (req,res)=> {
    
//     const Name= req.body.Name;
//     const subtitle = req.body.subtitle;
//     const logo = req.body.logo;
//     titlename=Name;
//     db.query("INSERT INTO components (name,subtitle,logo) VALUES (?,?,?)",
//      [Name,subtitle,logo],
//      (err,result) => {
//         console.log(err);
//     }
//     );
// });
app.put("/Component/:name", (req,res)=> {
    
    const Name= req.body.NewName;
    const subtitle = req.body.subtitle;
    const logo = req.body.logo;
    titlename= req.params.name;
   


    db.query("UPDATE components SET name =?, subtitle=?,logo=? WHERE name=?",
     [Name,subtitle,logo,titlename],
     (err,result) => {
        console.log(err);
    }
    );
});

app.listen(3001, () => {
    console.log("server running");
});