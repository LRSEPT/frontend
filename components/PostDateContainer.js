import React, { useEffect, useState } from 'react'
import style from '../styles/categories.module.css';
import {Navbar, NavbarContent, NavbarItem, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu} from "@nextui-org/react";

const defaultStyle = {
    fontSize: style.month_button.fontSize,
    fontStyle: style.month_button.fontStyle,
    color: style.month_button.color,
};

const defaultStyleCat = {
    fontSize: style.month_button.fontSize,
    fontStyle: style.month_button.fontStyle,
    color: style.month_button.color,
};

export default function PostDateContainer({ Months = [], Years = [], Category= [], onYearSelect, onMonthSelect, onCategorySelect}) {
    const [monthName, setMonthName] = useState('No Month Selected')
    const [yearValue, setYearValue] = useState('No Year Selected')
    const [categorySelection, setCategorySelection] = useState('No Category Selected');

    useEffect(() => {
        if (yearValue === 'No Year Selected') {
          setMonthName('No Month Selected');
        }
      }, [yearValue]);

    const handleYearClick = (y) => () => {
        onYearSelect(y);
        setYearValue(y);
    }

    const handleMonthClick = (mon) => () => {
        onMonthSelect(mon);
        setMonthName(mon)
    }

    const handleCategoryClick = (cat) => () => {
        onCategorySelect(cat);
        setCategorySelection(cat);
    }

    return (
    <div>
        <div className={style.container}>
            <Navbar>
                <NavbarContent justify='center'>
                    {/* Year Dropdown */}
                    <Dropdown 
                        className={style.months_dropdown}
                        shouldBlockScroll='false'
                    >
                        <NavbarItem>
                            <DropdownTrigger>
                                <Button className={style.month_button}
                                    disableRipple
                                    radius="sm"
                                    variant='light'
                                    style={{
                                        fontSize: yearValue === 'No Year Selected' ? '1.1em' : defaultStyle.fontSize,
                                        fontStyle: yearValue === 'No Year Selected' ? 'italic' : defaultStyle.fontStyle,
                                        color: yearValue === 'No Year Selected' ? 'rgba(0, 0, 0, 0.5)' : defaultStyle.color,
                                    }}
                                >
                                    {yearValue}
                                </Button>
                            </DropdownTrigger>
                        </NavbarItem>
                        <DropdownMenu 
                            aria-label='Months-dropdown'
                        >
                        {
                            Years.map((y) => (
                                <DropdownItem 
                                    className={style.single_item}
                                    key={y}
                                    onClick={handleYearClick(y)}
                                >
                                {y}
                                </DropdownItem>
                            ))
                        }
                        </DropdownMenu>
                    </Dropdown>

                    {/* Month Dropdown */}
                    <Dropdown 
                        shouldBlockScroll='false'
                        className={style.months_dropdown}
                    >
                        <NavbarItem>
                            <DropdownTrigger
                                isDisabled={yearValue === 'No Year Selected'}
                            >
                                <Button className={`${yearValue === 'No Year Selected' ? style.disabled_dropdown : style.month_button} ${monthName === 'No Month Selected' ? style.noMonthSelected :''}`} 
                                    disableRipple
                                    radius="sm"
                                    variant='light'
                                    style={{
                                        fontSize: monthName === 'No Month Selected' ? '1.1em' : '',
                                        fontStyle: monthName === 'No Month Selected' ? 'italic' : '',
                                        color: monthName === 'No Month Selected' ? 'rgba(0, 0, 0, 0.5)' : '',
                                    }}
                                >
                                    {monthName}
                                </Button>
                            </DropdownTrigger>
                        </NavbarItem>
                        <DropdownMenu 
                            aria-label='Months-dropdown'>
                        {
                            Months.map((mon) => (
                                <DropdownItem 
                                    className={style.single_item }
                                    key={mon}
                                    onClick={handleMonthClick(mon)}
                                >
                                {mon}
                                </DropdownItem>
                            ))
                        }
                        </DropdownMenu>
                    </Dropdown>
                    <hr className={style.breaking_line}></hr>
                    {/* Categories Dropdown */}
                    <Dropdown 
                        className={style.months_dropdown}
                        shouldBlockScroll='false'
                    >
                        <NavbarItem>
                            <DropdownTrigger>
                                <Button className={style.category_button}
                                    disableRipple
                                    radius="sm"
                                    variant='light'
                                    style={{
                                        fontSize: categorySelection === 'No Category Selected' ? '1.1em' : defaultStyleCat.fontSize,
                                        fontStyle: categorySelection === 'No Category Selected' ? 'italic' : defaultStyleCat.fontStyle,
                                        color: categorySelection === 'No Category Selected' ? 'rgba(0, 0, 0, 0.5)' : defaultStyleCat.color,
                                    }}
                                >
                                    {categorySelection}
                                </Button>
                            </DropdownTrigger>
                        </NavbarItem>
                        <DropdownMenu 
                            aria-label='Months-dropdown'
                        >
                        {
                            Category.map((cat) => (
                                <DropdownItem 
                                    className={style.single_item}
                                    key={cat}
                                    onClick={handleCategoryClick(cat)}
                                >
                                {cat}
                                </DropdownItem>
                            ))
                        }
                        </DropdownMenu>
                    </Dropdown>
                </NavbarContent>
            </Navbar>
        </div>
    </div>
  )
}
