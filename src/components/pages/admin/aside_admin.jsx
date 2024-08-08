import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';


function Aside_admin() {
  return <>
      <div className="aside-main">
          <div className='aside_admin'>
              <div className='tieuDe_admin'>Trang Admin</div>
              <List>
                  {/* <ListItem className="list" disablePadding>
                      <Accordion style={{ borderRadius: "initial", boxShadow: "none", flex: "1" }}>
                          <AccordionSummary
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls="panel1-content"
                              id="panel1-header"
                          >
                              Ngân sách
                          </AccordionSummary>
                          <AccordionDetails style={{ padding: "0" }}>
                              <ul className="ul-list">
                                  <li className="li-list"><a href="/">Cài đặt ngân sách</a></li>
                              </ul>
                          </AccordionDetails>
                      </Accordion>
                  </ListItem> */}

                  <ListItem className='li_item' disablePadding>
                      <ListItemButton>
                          <ListItemText primary="User" />
                      </ListItemButton>
                  </ListItem>

                  <div><a href="/">Đăng xuất</a></div>

              </List>

          </div>
      </div>
  </>
}

export default Aside_admin
