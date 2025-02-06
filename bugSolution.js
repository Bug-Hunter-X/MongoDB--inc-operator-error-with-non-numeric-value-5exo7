```javascript
//Correct usage of $inc operator
db.collection('myCollection').updateOne({"_id":ObjectId("6531234567890")},{$inc:{field1:1}});
//To modify a string field, use $set instead
db.collection('myCollection').updateOne({"_id":ObjectId("6531234567890")},{$set:{field2:"newValue"}});
```