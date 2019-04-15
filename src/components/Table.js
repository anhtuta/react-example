import React from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

class Table extends React.Component {
    // A class component must include render(), and the return can
    // only return one parent element
    render() {
        const {characterData, removeCharacter} = this.props;

        return (
            <table>
                <TableHeader />
                <TableBody characterData={characterData} removeCharacter={removeCharacter}/>
            </table>
        )
    }
}

export default Table;