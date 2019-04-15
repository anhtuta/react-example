import React from 'react';

// Simple Components
// The other type of component in React is the simple component, which is a 
// function. This component doesn't use the class keyword
const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
                <th>Action</th>
            </tr>
        </thead>
    )
}

export default TableHeader;