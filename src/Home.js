import React, { useState } from 'react'

function Home() {
    const [inputFields, setInputFields] = useState([
        {
            orderId: '', itemNo: '', materialId: '', materialdescription: '', currentqty: '',
            previousqty: '', qtydifference: '', ordercommand: ''
        }
    ])
    const handleFormChange = (index, event) => {
        let data = [...inputFields];
        data[index][event.target.name] = event.target.value;
        setInputFields(data);
    }
    const addFields = () => {
        let newfield = {
            orderId: '', itemNo: '', materialId: '', materialdescription: '', currentqty: '',
            previousqty: '', qtydifference: '', ordercommand: ''
        }

        setInputFields([...inputFields, newfield])
    }
    const submit = (e) => {
        e.preventDefault();
        console.log(inputFields)
    }
    const removeFields = (index) => {
        let data = [...inputFields];
        data.splice(index, 1)
        setInputFields(data)
    }
    return (
        <form action="" className='container f1' onSubmit={submit}>

            <div className='row d1'>

                <h1 className='text-center'>MATERIAL ORDER MICRO SERVICE</h1>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <label for="olistID" class="form-label ">ORDER LIST ID</label>
                    <input type="text" class="form-control" id="olistID" aria-describedby="olistI.D" required/>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12">
                    <label for="bID" class="form-label">BUILDING ID</label>
                    <input type="text" class="form-control" id="bID" aria-describedby="olistI.D"  required/>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12">
                    <label for="bname" class="form-label">BUILDING NAME</label>
                    <input type="text" class="form-control" id="bname" aria-describedby="olistI.D"  required/>
                </div>

                {/* second row */}

                <div className="col-lg-4 col-md-12 col-sm-12">
                    <label for="badd" class="form-label ">BUILDING ADDRESS</label>
                    <input type="text" class="form-control" id="badd" aria-describedby="olistI.D"  required/>
                </div>
                <div className="col-lg-8 col-md-12 col-sm-12">
                    <label for="orderdes" class="form-label">ORDER DISCRIPTION</label>
                    <input type="text" class="form-control" id="orderdes" aria-describedby="orderdes1"  required/>
                </div>
            </div><br /><br />

            <button onClick={addFields} className='btn btn-primary ba'>ADD MORE  <i class="fa-solid fa-circle-plus"></i></button>
            <br /><br />
            {/* dynamic form 1,1,1,4,1,1,1,2 */}
            {inputFields.map((input, index) => {
                return (
                    <div key={index}>
                        <div className="row">
                            <div className="col-lg-1">

                                <label for="orderid" class="form-label ">ORDER ID</label> <br /><br />
                                <input type="text" class="form-control" id="orderid" aria-describedby="orderid1"
                                    value={input.orderId} onChange={event => handleFormChange(index, event)}
                                    />
                            </div>
                            <div className="col-lg-1">
                                <label for="itemno" class="form-label ">ITEM NO</label> <br /><br />
                                <input type="text" class="form-control" id="itemno" aria-describedby="itemno1"
                                    value={input.itemNo} onChange={event => handleFormChange(index, event)}
                                   />
                            </div>
                            <div className="col-lg-1">
                                <label for="matid" class="form-label ">MATERIAL ID</label>
                                <input type="text" class="form-control" id="matid" aria-describedby="matid1"
                                    value={input.materialId} onChange={event => handleFormChange(index, event)}
                                    />
                            </div>
                            <div className="col-lg-3">
                                <label for="matdesc" class="form-label ">MATERIAL DESC</label><br /><br />
                                <input type="text" class="form-control" id="matdesc" aria-describedby="matdesc1"
                                    value={input.materialdescription} onChange={event => handleFormChange(index, event)}
                                  />
                            </div>
                            <div className="col-lg-1">
                                <label for="currqty" class="form-label ">CURRENT QTY</label>
                                <input type="number" class="form-control" id="currqty" aria-describedby="currqty1"
                                    value={input.currentqty} onChange={event => handleFormChange(index, event)}
                                  />
                            </div>
                            <div className="col-lg-1">
                                <label for="preqty" class="form-label ">PREVIOUS QTY</label>
                                <input type="number" class="form-control" id="preqty" aria-describedby="preqty1"
                                    value={input.previousqty} onChange={event => handleFormChange(index, event)}
                                   />
                            </div>
                            <div className="col-lg-1">
                                <label for="qtydiff" class="form-label ">QTY DIFF</label><br /><br />
                                <input type="number" class="form-control" id="qtydiff" aria-describedby="qtydiff1"
                                    value={input.qtydifference} onChange={event => handleFormChange(index, event)}
                                  />
                            </div>
                            <div className="col-lg-2">
                                <label for="ordercomm" class="form-label ">ORDER COMMENT</label><br /><br />
                                <input type="text" class="form-control" id="ordercomm" aria-describedby="ordercomm1"
                                    value={input.ordercommand} onChange={event => handleFormChange(index, event)}
                                    />
                            </div>
                            <div className="col-lg-1">
                                <button onClick={() => removeFields(index)} className='btn btn-danger br'><i class="fa-solid fa-minus"></i></button>
                            </div>

                        </div>
                    </div>
                )
            })}
            <br /><br />
            <div className="row">
                <div className="col-lg-12">
                    <label for="badd" class="form-label ">REMARKS</label>
                    <input type="text" class="form-control" id="orderdes" aria-describedby="orderdes1"  required/>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4">
                    <label for="bID" class="form-label">PREPERED BY</label>
                    <input type="text" class="form-control" id="bID" aria-describedby="olistI.D"  required/>

                </div>
                <div className="col-lg-4">
                    <label for="bID" class="form-label">CHECKED BY</label>
                    <input type="text" class="form-control" id="bID" aria-describedby="olistI.D" required />

                </div>
                <div className="col-lg-4">
                    <label for="bID" class="form-label">APPROVED BY</label>
                    <input type="text" class="form-control" id="bID" aria-describedby="olistI.D"  required/>

                </div>
            </div>
            <div className="row">
                <div className="col-lg-4">
                    <label for="bID" class="form-label">DATE</label>
                    <input type="date" class="form-control" id="bID" aria-describedby="olistI.D"  required/>

                </div>
                <div className="col-lg-4">
                    <label for="bID" class="form-label">DATE</label>
                    <input type="date" class="form-control" id="bID" aria-describedby="olistI.D" required />

                </div>
                <div className="col-lg-4">
                    <label for="bID" class="form-label">DATE</label>
                    <input type="date" class="form-control" id="bID" aria-describedby="olistI.D"  required/>

                </div>
            </div>
            <br />
            <div className="row">
                <div className="col-lg-4">
                    <button className='btn btn-primary'>SEND FOR CHECK</button>
                </div>
                <div className="col-lg-4">
                    <button className='btn btn-primary'>SEND FOR APP</button>
                </div>
                <div className="col-lg-4">
                    <button className='btn btn-primary'>APPROVE</button>
                </div>
            </div><br /><br />
            <div className='bs'>
                <button className='btn btn-success text-center' onClick={submit}>Submit</button>
            </div>
        </form>

    )
}

export default Home