import "../../styles/aside_article.scss"

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import ListItemText from '@mui/material/ListItemText';
// import Divider from '@mui/material/Divider';

// aside này lắm ở phần bên trái giao diện
function Aside() {
    return <>
        <div className="aside-main">
            <div className='aside'>
                <List>
                    <ListItem className="list" disablePadding>
                        <Accordion style={{ borderRadius: "initial", boxShadow: "none", flex: "1" }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                               Budget
                            </AccordionSummary>
                                <AccordionDetails style={{ padding: "0" }}>
                                    <ul className="ul-list">
                                    <li className="li-list"><a href="/">Set budget</a></li>
                                    </ul>
                                </AccordionDetails>
                        </Accordion>
                    </ListItem>


                    <ListItem className="list" disablePadding>
                        <Accordion style={{ borderRadius: "initial", boxShadow: "none", flex: "1" }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                Monthly expenses
                            </AccordionSummary>
                            <AccordionDetails>
                                <ul className="ul-list">
                                    <li className="li-list"><a href="/loaichitieu">Type of spending</a></li>
                                    <li className="li-list"><a href="/khoanchitieu">Expenditures</a></li>
                                </ul>
                            </AccordionDetails>
                        </Accordion>
                    </ListItem>
                    <ListItem className="list" disablePadding>
                        <Accordion style={{ borderRadius: "initial", boxShadow: "none", flex: "1" }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                Overview
                            </AccordionSummary>
                            <AccordionDetails>
                                <ul className="ul-list">
                                    <li className="li-list"><a href="/baocao">Report</a></li>
                                </ul>
                            </AccordionDetails>
                        </Accordion>
                    </ListItem>


                </List>

            </div>
        </div>
    </>
}

export default Aside;