import React from 'react'
import {randomSet, jsDataTypes} from "../../../utils/utils";

export const MongoFindAnd = () => {
    const identifiers = randomSet(10, null, false);
    const types = randomSet(3, jsDataTypes, false)
    const collection = identifiers[0];
    const field1 = identifiers[1];
    const field2 = identifiers[2];
    const field3 = identifiers[3];
    const value1 = identifiers[4];
    const value2 = Math.round(Math.random() * 100);
    const type1 = "string";
    const type2 = "number";
    const type3 = types[2];
    return(
        <div>
            <h1>Mongo Find And</h1>
            <div id="question123">
                Consider the following schema
                <br/>
                <br/>
                <b>{collection}({field1}: {type1}, {field2}: {type2}, {field3}: {type3})</b>
                <br/>
                <br/>
                Which of the following options retrieves documents
                whose field <b>{field1}</b> is equal to <b>"{value1}"</b>
                and field <b>{field2}</b> is equal to <b>{value2}</b>
                <br/>
            </div>
            <div id="answers234">
                <hr/>
<input size={70}
       value={`db.${collection}.find({$and: [{${field1}: "${value1}"}, {${field2}: ${value2}}]})`}/>
<hr/>
<input size={70}
       value={`db.${collection}.find([{${field1}: "${value1}"}, {${field2}: ${value2}}])`}/>
<hr/>
<input size={70}
       value={`db.${collection}.find({$and: {${field1}: "${value1}"${field2}: ${value2}}})`}/>
<hr/>
<input size={70}
       value={`db.${collection}.find([$and: {{${field1}: "${value1}"}, {${field2}: ${value2}}}])`}/>
                <hr/>
            </div>
        </div>
    )
}
