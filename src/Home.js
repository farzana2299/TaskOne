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
        <div className='mdiv container'>
            <form action="" className='container f1' onSubmit={submit}>

                <div className='row d1'>

                    <h1 className='text-center'><b>MATERIAL ORDER MICRO SERVICE</b> </h1>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <label for="olistID" class="form-label "><b>ORDER LIST ID</b> </label>
                        <input style={{ outline: 'none' }} placeholder='Eg: 101' type="text" class="form-control" id="olistID" aria-describedby="olistI.D" required />
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <label for="bID" class="form-label"><b>BUILDING ID</b></label>
                        <input type="text" class="form-control" placeholder='Eg: 1011' id="bID" aria-describedby="olistI.D" required />
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <label for="bname" class="form-label"><b>BUILDING NAME</b></label>
                        <input type="text" class="form-control"  placeholder='Eg: Tranquil Bay' id="bname" aria-describedby="olistI.D" required />
                    </div>

                    {/* second row */}

                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <label for="badd" class="form-label "><b>BUILDING ADDRESS</b></label>
                        <input type="text" class="form-control"placeholder='Eg: Tranquil Bay NewYork' id="badd" aria-describedby="olistI.D" required />
                    </div>
                    <div className="col-lg-8 col-md-12 col-sm-12">
                        <label for="orderdes" class="form-label"><b>ORDER DISCRIPTION</b></label>
                        <input type="text" class="form-control"placeholder='Description about your Order' id="orderdes" aria-describedby="orderdes1" required />
                    </div>
                </div><br /><br /> <hr />
                <div>
                    <button onClick={addFields} className='btn btn-primary ba'>ADD MORE  <i class="fa-solid fa-circle-plus"></i></button>

                </div>
                <br /><br />
               
                {/* dynamic form 1,1,1,4,1,1,1,2 */}
                {inputFields.map((input, index) => {
                    return (
                        <div key={index}>
                            <div className="row">
                                <div className="col-lg-1">

                                    <label for="orderid" class="form-label "><b>ORDER ID</b></label> <br />
                                    <input type="text" name='orderId' class="form-control" placeholder='1011' id="orderid" aria-describedby="orderid1"
                                        value={input.orderId} onChange={event => handleFormChange(index, event)}
                                    />
                                </div>
                                <div className="col-lg-1">
                                    <label for="itemno" class="form-label "><b>ITEM NO</b></label> <br />
                                    <input type="text" name='itemNo' class="form-control"placeholder='1111' id="itemno" aria-describedby="itemno1"
                                        value={input.itemNo} onChange={event => handleFormChange(index, event)}
                                    />
                                </div>
                                <div className="col-lg-1">
                                    <label for="matid" class="form-label "><b>MATERIAL ID</b></label>
                                    <input type="text" name='materialId' class="form-control"placeholder=' 2222' id="matid" aria-describedby="matid1"
                                        value={input.materialId} onChange={event => handleFormChange(index, event)}
                                    />
                                </div>
                                <div className="col-lg-3">
                                    <label for="matdesc" class="form-label "><b>MATERIAL DESC</b></label><br /><br />
                                    <input type="text" name='materialdescription' class="form-control"placeholder='Description about your Material' id="matdesc" aria-describedby="matdesc1"
                                        value={input.materialdescription} onChange={event => handleFormChange(index, event)}
                                    />
                                </div>
                                <div className="col-lg-1">
                                    <label for="currqty" class="form-label "><b>CURRENT QTY</b></label>
                                    <input type="number" name='currentqty' class="form-control"placeholder=' 10' id="currqty" aria-describedby="currqty1"
                                        value={input.currentqty} onChange={event => handleFormChange(index, event)}
                                    />
                                </div>
                                <div className="col-lg-1">
                                    <label for="preqty" class="form-label "><b>PREVIOUS QTY</b></label>
                                    <input type="number" name='previousqty' class="form-control"placeholder=' 8' id="preqty" aria-describedby="preqty1"
                                        value={input.previousqty} onChange={event => handleFormChange(index, event)}
                                    />
                                </div>
                                <div className="col-lg-1">
                                    <label for="qtydiff" class="form-label "><b>QTY DIFF</b></label><br />
                                    <input type="number" name='qtydifference' class="form-control"placeholder=' 2' id="qtydiff" aria-describedby="qtydiff1"
                                        value={input.qtydifference} onChange={event => handleFormChange(index, event)}
                                    />
                                </div>
                                <div className="col-lg-2">
                                    <label for="ordercomm" class="form-label "><b>ORDER COMMENT</b></label><br /><br />
                                    <input type="text" name='ordercommand' class="form-control" id="ordercomm" placeholder='Comments about your Order'  aria-describedby="ordercomm1"
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
                <br /><br /><hr />
                <div className="row">
                    <div className="col-lg-12">
                        <label for="badd" class="form-label "><b>REMARKS</b> </label>
                        <input type="text" placeholder='Comments about this Order' class="form-control" id="orderdes" aria-describedby="orderdes1" required />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <label for="bID" class="form-label"><b>PREPERED BY</b></label>
                        <input type="text" class="form-control" placeholder='Eg: Ashok' id="bID" aria-describedby="olistI.D" required />

                    </div>
                    <div className="col-lg-4">
                        <label for="bID" class="form-label"><b>CHECKED BY</b></label>
                        <input type="text" class="form-control" placeholder='Eg: Ram' id="bID" aria-describedby="olistI.D" required />

                    </div>
                    <div className="col-lg-4">
                        <label for="bID" class="form-label"><b>APPROVED BY</b></label>
                        <input type="text" class="form-control" id="bID"placeholder='Eg: Vyshak' aria-describedby="olistI.D" required />

                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <label for="bID" class="form-label"><b>DATE</b></label>
                        <input type="date" class="form-control" id="bID" aria-describedby="olistI.D" required />

                    </div>
                    <div className="col-lg-4">
                        <label for="bID" class="form-label"><b>DATE</b></label>
                        <input type="date" class="form-control" id="bID" aria-describedby="olistI.D" required />

                    </div>
                    <div className="col-lg-4">
                        <label for="bID" class="form-label"><b>DATE</b></label>
                        <input type="date" class="form-control" id="bID" aria-describedby="olistI.D" required />

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
                    </div><br /><br />
                    <div className='bs'>
                        <button className='btn btn-success text-center' onClick={submit}>Submit</button>
                    </div>

                </div>

            </form>
        </div>
    )
}

export default Home