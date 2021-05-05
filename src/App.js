import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Link, Route, useParams} from "react-router-dom";
import DatabaseDesign from "./db-design/db-design";
import WebDevelopment from "./web-dev/web-dev";
import DbDesignQueryJoinMultipleChoice from "./db-design/query/join/fill-blanks/query-join-multiple-choice";
import DbDesignQueryJoinFillBlanks from "./db-design/query/join/fill-blanks/query-join-fill-blanks";
import DbDesignQueryGroupByCountFillBlanks from "./db-design/query/join/fill-blanks/query-group-by-count-fill-blanks";

import DbDesignInsertIntoValues from "./db-design/insert/insert-into-values";
import DbDesignInsertIntoColumns from "./db-design/insert/insert-into-columns";
import DbDesignInsertIntoSelect from "./db-design/insert/insert-into-select";

import GroupBySingleTableMultipleChoice from "./db-design/group-by/single-table/multiple-choice/group-by-single-table-multiple-choice"
import GroupByTwoTablesMultipleMinMaxChoice from "./db-design/group-by/two-tables/multiple-choice/group-by-two-tables-multiple-min-max-choice";
import GroupByTwoTablesMultipleCountChoice
    from "./db-design/group-by/two-tables/multiple-choice/group-by-two-tables-multiple-count-choice";
import InlineViewLegalTrueFalse from "./db-design/inline-views/true-false/inline-view-legal-true-false";
import UmlGroupByMultipleChoice from "./db-design/group-by/uml-group-by-multiple-choice";
import UmlGroupByMultipleSum from "./db-design/group-by/uml-group-by-multiple-choice-sum";
import FirstNormalForm from "./db-design/normalization/first-normal-form";
import SecondNormalForm from "./db-design/normalization/second-normal-form";
import ThirdNormalForm from "./db-design/normalization/third-normal-form";
import TextToUml from "./db-design/uml/text-to-uml";
import RelationalAlgebraSymbol from "./db-design/relational-algebra/symbol";
import RelationalAlgebraText from "./db-design/relational-algebra/text";
import WidgetList from "./web-dev/widget-list/widget-list";
import T from "./web-dev/react/state/function/use-state/t";
import Radios from "./web-dev/html/radio";
import Toggle from "./web-dev/react/state/class/state1";
import StateRedux from "./web-dev/react/state/redux/state-redux";
import SpreaderArray from "./web-dev/es6/spreader/spreader-array";
import SpreaderObject from "./web-dev/es6/spreader/spreader-object";
import StateClassPrevState from "./web-dev/react/state/class/state-class-prev-state";
import ReactClassProps from "./web-dev/react/class/props";
import ReactFunctionReturn from "./web-dev/react/function/return/return";
import Add from "./web-dev/routing/add";
import Subtract from "./web-dev/routing/subtract";
import {MongoFindAll} from "./db-design/mongodb/mongo/find/mongo-find-all";
import {MongoFindById} from "./db-design/mongodb/mongo/find/mongo-find-by-id";
import {MongoFindByField} from "./db-design/mongodb/mongo/find/mongo-find-by-field";
import {MongoFindByMultipleFields} from "./db-design/mongodb/mongo/find/mongo-find-by-multiple-fields";
import {MongoFindAnd} from "./db-design/mongodb/mongo/find/mongo-find-and";
import {MongoFind$Eq} from "./db-design/mongodb/mongo/find/mongo-find-$eq";
import {MongoFind$Gt} from "./db-design/mongodb/mongo/find/mongo-find-$gt";
import {MongoProjectIncludeOne} from "./db-design/mongodb/mongo/project/mongo-project-include-one";
import {MongoProjectIncludeSeveral} from "./db-design/mongodb/mongo/project/mongo-project-include-several";
import {MongoProjectExcludeId} from "./db-design/mongodb/mongo/project/mongo-project-exclude-id";
import {MongoInsert} from "./db-design/mongodb/mongo/insert/mongo-insert";
import {MongoUpdate} from "./db-design/mongodb/mongo/update/mongo-update";
import {MongoReplace} from "./db-design/mongodb/mongo/update/mongo-replace";
import {MongoRemove} from "./db-design/mongodb/mongo/remove/mongo-remove";
import {MongooseSchemaNumber} from "./db-design/mongodb/mongoose/schema/mongoose-schema-number";
import {MongooseSchemaCollection} from "./db-design/mongodb/mongoose/schema/mongoose-schema-collection";
import {MongooseSchemaModel} from "./db-design/mongodb/mongoose/schema/mongoose-schema-model";
import {MongooseModelFind} from "./db-design/mongodb/mongoose/model/mongoose-model-find";
import {MongooseModelFindById} from "./db-design/mongodb/mongoose/model/mongoose-model-find-by-id";
import {MongooseModelFindOne} from "./db-design/mongodb/mongoose/model/mongoose-model-find-one";
import {IndexingCreateSingleNonUniqueIndex} from "./db-design/indexing/indexing-create-single-non-unique-index";
import {IndexingCreateCompositeIndex} from "./db-design/indexing/indexing-create-composit-index";
import {TransactionsDirtyRead} from "./db-design/transactions/transactions-dirty-reads";
import {TransactionsNonRepeatableRead} from "./db-design/transactions/transactions-non-repeatable-read";
import ContextAnswer from "./web-dev/react/context/context-answer";

function App() {
    return (
        <BrowserRouter>
            <div className="container-fluid">
                <h1>Quiz Maker</h1>
                <div className="row">
                    <div className="col-2">
                        <div>
                            <Link to="/db-design" className="list-group-item">DB</Link>
                            <Link to="/web-dev" className="list-group-item">WebDev</Link>
                        </div>
                    </div>
                    <div className="col-10">

                        <Route path="/add/:a/:b">
                            <Add/>
                        </Route>
                        <Route path="/sub/:c/:d">
                            <Subtract/>
                        </Route>


                        <>
                        <Route path="/db-design" exact component={DatabaseDesign}/>
                        <>
                            <Route path="/db-design/transactions/transactions-non-repeatable-reads"
                                   exact component={TransactionsNonRepeatableRead}/>
                            <Route path="/db-design/transactions/transactions-dirty-reads"
                                   exact component={TransactionsDirtyRead}/>
                        </>
                        <>
                            <Route path="/db-design/indexing/indexing-create-composite"
                                   exact component={IndexingCreateCompositeIndex}/>
                            <Route path="/db-design/indexing/indexing-create-single-non-unique"
                                   exact component={IndexingCreateSingleNonUniqueIndex}/>
                        </>
                        <>
                            <Route path="/db-design/mongodb/mongoose/model/mongoose-model-find-one"
                                   exact component={MongooseModelFindOne}/>
                            <Route path="/db-design/mongodb/mongoose/model/mongoose-model-find-by-id"
                                   exact component={MongooseModelFindById}/>
                            <Route path="/db-design/mongodb/mongoose/model/mongoose-model-find"
                                   exact component={MongooseModelFind}/>
                        </>
                        <>
                            <Route path="/db-design/mongodb/mongoose/schema/mongoose-schema-model"
                                   exact component={MongooseSchemaModel}/>
                            <Route path="/db-design/mongodb/mongoose/schema/mongoose-schema-collection"
                                   exact component={MongooseSchemaCollection}/>
                            <Route path="/db-design/mongodb/mongoose/schema/mongoose-schema-number"
                                   exact component={MongooseSchemaNumber}/>
                        </>
                        <>
                            <Route path="/db-design/mongodb/mongo/remove/mongo-remove"
                                   exact component={MongoRemove}/>
                        </>
                        <>
                            <Route path="/db-design/mongodb/mongo/update/mongo-replace"
                                   exact component={MongoReplace}/>
                            <Route path="/db-design/mongodb/mongo/update/mongo-update"
                                   exact component={MongoUpdate}/>
                        </>
                        <>
                            <Route path="/db-design/mongodb/mongo/insert/mongo-insert"
                                   exact component={MongoInsert}/>
                        </>
                        <>
                            <Route path="/db-design/mongodb/mongo/project/mongo-project-exclude-id"
                                   exact component={MongoProjectExcludeId}/>
                            <Route path="/db-design/mongodb/mongo/project/mongo-project-include-several"
                                   exact component={MongoProjectIncludeSeveral}/>
                            <Route path="/db-design/mongodb/mongo/project/mongo-project-only-one"
                                   exact component={MongoProjectIncludeOne}/>
                        </>
                        <>
                            <Route path="/db-design/mongodb/mongo/mongo-find-$gt"
                                   exact component={MongoFind$Gt}/>
                            <Route path="/db-design/mongodb/mongo/mongo-find-$eq"
                                   exact component={MongoFind$Eq}/>
                            <Route path="/db-design/mongodb/mongo/mongo-find-and"
                                   exact component={MongoFindAnd}/>
                            <Route path="/db-design/mongodb/mongo/mongo-find-by-multiple-fields"
                                   exact component={MongoFindByMultipleFields}/>
                            <Route path="/db-design/mongodb/mongo/mongo-find-by-field"
                                   exact component={MongoFindByField}/>
                            <Route path="/db-design/mongodb/mongo/mongo-find-by-id"
                                   exact component={MongoFindById}/>
                            <Route path="/db-design/mongodb/mongo/mongo-find-all"
                                   exact component={MongoFindAll}/>
                        </>
                            </>
                        
                        
                        <>
                            <Route path="/web-dev/react/context" exact
                                   component={ContextAnswer}/>
                        </>
                        
                        <>
                            <Route path="/web-dev/react/function/return" exact
                                   component={ReactFunctionReturn}/>

                            <Route path="/web-dev/react/class/props" exact
                                   component={ReactClassProps}/>

                        </>
                        <>
                            <Route path="/web-dev/es6/spreader/array" exact
                                   component={SpreaderArray}/>
                            <Route path="/web-dev/es6/spreader/object" exact
                                   component={SpreaderObject}/>
                        </>
                        <>
                            <Route path="/web-dev/react/state/class/prev-state" exact
                                   component={StateClassPrevState}/>
                                   
                            <Route path="/web-dev/react/state/redux" exact
                                   component={StateRedux}/>

                            <Route path="/web-dev/react/state/class" exact
                                   component={Toggle}/>

                            <Route path="/web-dev/html/radio" exact
                                   component={Radios}/>

                            <Route path="/web-dev/widget-list" exact
                                   component={WidgetList}/>

                            <Route path="/db-design/relational-algebra/text" exact
                                   component={RelationalAlgebraText}/>
                            <Route path="/db-design/relational-algebra/symbol" exact
                                   component={RelationalAlgebraSymbol}/>

                            <Route path="/db-design/uml/text-to-uml" exact
                                   component={TextToUml}/>

                            <Route path="/db-design/normalization/third-normal-form" exact
                                   component={ThirdNormalForm}/>
                            <Route path="/db-design/normalization/second-normal-form" exact
                                   component={SecondNormalForm}/>
                            <Route path="/db-design/normalization/first-normal-form" exact
                                   component={FirstNormalForm}/>

                            <Route path="/db-design/inline-views/true-false" exact
                                   component={InlineViewLegalTrueFalse}/>

                            <Route path="/db-design/group-by/uml-group-by-multiple-choice-sum" exact
                                   component={UmlGroupByMultipleSum}/>
                            <Route path="/db-design/group-by/uml-group-by-multiple-choice" exact
                                   component={UmlGroupByMultipleChoice}/>
                            <Route path="/db-design/group-by/single-table/multiple-choice" exact
                                   component={GroupBySingleTableMultipleChoice}/>
                            <Route path="/db-design/group-by/two-tables/min-max/multiple-choice" exact
                                   component={GroupByTwoTablesMultipleMinMaxChoice}/>
                            <Route path="/db-design/group-by/two-tables/count/multiple-choice" exact
                                   component={GroupByTwoTablesMultipleCountChoice}/>


                            <Route path="/db-design/query/join/multiple-choice" exact
                                   component={DbDesignQueryJoinMultipleChoice}/>
                            <Route path="/db-design/query/join/fill-blanks" exact
                                   component={DbDesignQueryJoinFillBlanks}/>
                            <Route path="/db-design/query/group-by/fill-blanks" exact
                                   component={DbDesignQueryGroupByCountFillBlanks}/>

                            <Route path="/db-design/insert/fill-blanks/insert-into-values" exact
                                   component={DbDesignInsertIntoValues}/>
                            <Route path="/db-design/insert/fill-blanks/insert-into-columns" exact
                                   component={DbDesignInsertIntoColumns}/>
                            <Route path="/db-design/insert/fill-blanks/insert-into-select" exact
                                   component={DbDesignInsertIntoSelect}/>
                        </>
                        <Route path="/web-dev" exact component={WebDevelopment}/>
                        <>
                            <Route path="/web-dev/react/function/use-state" exact component={T}/>
                            
                        </>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
