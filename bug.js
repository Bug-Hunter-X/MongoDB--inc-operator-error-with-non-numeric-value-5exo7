```javascript
//Incorrect usage of $inc operator
db.collection('myCollection').updateOne({"_id":ObjectId("6531234567890")},{$inc:{field1:1,field2:"abc"}});
```