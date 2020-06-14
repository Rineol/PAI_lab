import React, { Component } from 'react';



const Filter = (props) => 
            <div>
                <input

                    type="checkbox"
                    onClick={() => props.handleFilter()}

                />
                Hide completed
            </div>


export default Filter;