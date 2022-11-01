import React, {useState} from "react";

const Accordion = ({ items }) => { // Destructuring the props object

    const [activeIndex, setActiveIndex] = useState(null); // null is the default value

    const onTitleClicked = (index) => { // index is the index of the item that was clicked
        setActiveIndex(index); // This is the same as this.setState({activeIndex: index})
    };

    const renderItems = items.map((item, index) => { // item is the current item in the array, index is the index of the current item in the array
        
        const active = index === activeIndex ? 'active' : ''; // If the index of the current item is the same as the activeIndex, then the class 'active' is added to the div, otherwise it is an empty string
        
        return (
            <React.Fragment key={item.title}>
                <div className={`title ${active}`} onClick={() => onTitleClicked(index) }>
                    <i className="dropdown icon" />
                    {item.title}
                </div>
                <div className={`content ${active}`}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        );
    });
    return (
        <div className="ui styled accordion">
            {renderItems}
        </div>
    );
}

export default Accordion;