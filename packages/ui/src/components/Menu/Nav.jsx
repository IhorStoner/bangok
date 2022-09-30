import React, {useRef, useEffect,useState} from 'react';
import NavItem from "./NavItem";
import Button from "../Button/Button";
import angleIcon from "../../assets/icons/angle-icon.svg";
import {useDispatch, useSelector} from "react-redux";
import {selectCategory} from "../../redux/actions/productsAction";
import {getSelectedCategory} from "../../redux/selectors/productsSelector";

// eslint-disable-next-line no-unused-vars
const filter = [
  {name: 'All'},
  {name: 'Salads'},
  {name: 'Soups'},
  {name: 'Chicken dishes'},
  {name: 'Seafood dishes'},
  {name: 'Vegetable dishes'},
  {name: 'Bits and bites'},
  {name: 'On the side'}
];

const Nav = (props) => {
  const [width, setWidth] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const selectedCategory = useSelector(getSelectedCategory);

  const scrollRef = useRef();
  const dispatch = useDispatch();


  const handleClickButton = (val) => {
    scrollRef.current.scrollLeft += val;
  }

  useEffect(() => {
    if(!scrollRef.current) return
    const scrollWidth = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;

    setWidth(scrollWidth);

    scrollRef.current.addEventListener('scroll', () => {
      setScrollPosition(+scrollRef.current.scrollLeft);
    })
  }, [scrollRef]);

  // useEffect(() => {
  //  console.log(width, scrollPosition)
  // }, [width, scrollPosition]);



  return (<nav className="ribbon__inner" ref={scrollRef}>
    {scrollPosition !== 0 && <Button classNames={"ribbon__arrow ribbon__arrow_left ribbon__arrow_visible"} img={angleIcon} onClick={() => handleClickButton(-300)}/>}
    { filter.map((item, i) => <NavItem key={i} name={item.name} isActive={item.name === selectedCategory} onClick={() => dispatch(selectCategory(item.name))}/>)}
    {scrollPosition !== width && <Button classNames={"ribbon__arrow ribbon__arrow_right ribbon__arrow_visible"} img={angleIcon} onClick={() => handleClickButton(300)}/>}
  </nav>);
}

export default Nav;