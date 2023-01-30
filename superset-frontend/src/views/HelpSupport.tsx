import React, { useState } from 'react';
import Icon from 'src/components/Icons/Icon';

const HelpSupport = () => {
  const styles = {
    icon: {
      position: 'fixed' as 'fixed',
      right: '30px',
      bottom: '30px',
      fontSize: '50px',
    },
    popup: {
      position: 'fixed' as 'fixed',
      height: '400px',
      width: '350px',
      right: '70px',
      bottom: '80px',
      backgroundColor: 'white',
      border: '1px solid',
      borderRadius: '15px',
      padding: '2px 20px 5px 20px',
    },
    popupheader: {
      display: 'flex',
      flexDirection: 'row' as 'row',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
    },
    popupbody: {
      display: 'flex',
      flexDirection: 'column' as 'column',
      alignItems: 'flex-start',
      justifyContent: 'center',
      overflow: 'auto',
    },
    closepopup: {
      color: '#ff0000',
      cursor: 'pointer',
    },
    list: {
      fontSize: '16px',
      paddingTop: '3px',
      li: {
        paddingTop: '5px',
      },
    },
    data: {
      fontWeight: 'bold' as 'bold',
    },
  };

  const [open, setOpen] = useState(false);
  return (
    <>
      <Icon
        iconSize="xxl"
        style={styles.icon}
        fileName={'help_icon'}
        onClick={() => {
          setOpen(!open);
        }}
      />
      {open && (
        <div style={styles.popup}>
          <div style={styles.popupheader}>
            <h2>Help and Support</h2>
            <h3
              style={styles.closepopup}
              onClick={() => {
                setOpen(!open);
              }}
            >
              X
            </h3>
          </div>
          <hr style={{ marginTop: '-3px' }} />
          <div style={styles.popupbody}>
            <iframe
              width="300"
              height="160"
              src="https://www.youtube.com/embed/VEuBZqdSoHk"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>

            <ul style={styles.list}>
              <li>
                <data value="DASHBOARD" style={styles.data}>
                  <a
                    href="https://superset.apache.org/docs/creating-charts-dashboards/creating-your-first-dashboard"
                    target="_blank"
                  >
                    Create Your First DashBoard
                  </a>
                </data>
              </li>
              <li>
                <data value="DATA" style={styles.data}>
                  <a
                    href="https://superset.apache.org/docs/creating-charts-dashboards/exploring-data"
                    target="_blank"
                  >
                    Explore Data in superset
                  </a>
                </data>
              </li>
              <li>
                <data value="SECURITY" style={styles.data}>
                  <a
                    href="https://superset.apache.org/docs/security"
                    target="_blank"
                  >
                    Role Based Access Control
                  </a>
                </data>
              </li>
              <li>
                <data value="FAQ" style={styles.data}>
                  <a
                    href="https://superset.apache.org/docs/frequently-asked-questions"
                    target="_blank"
                  >
                    Frequenty Asked Questions
                  </a>
                </data>
              </li>
            </ul>
          </div>
          <div>
            <a
              href="https://github.com/apache/superset"
              title="View GitHub"
              target="_blank"
            >
              <img
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                alt="GitHub icon"
                width="50"
                height="50"
              />
            </a>
            <a
              href="https://superset.apache.org/"
              title="Superset Documentation"
              target="_blank"
            >
              <img
                src="https://superset.apache.org/img/superset-logo-horiz-apache.svg"
                alt="Superset icon"
                width="120"
                height="60"
              />
            </a>
            <a
              href="https://preset.io/blog/tutorial-contributing-code-to-apache-superset/"
              title="Superset Contribution"
              target="_blank"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Code.svg/120px-Code.svg.png"
                alt="Superset Contribution"
                width="70"
                height="50"
              />
            </a>
            <a
              href="https://opensource.org/licenses/Apache-2.0"
              title="Apache Superset License"
              target="_blank"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjq-iizbO6SonsG2NDIBd2pm73owButFI4WA&usqp=CAU"
                alt="Apache Superset License"
                width="50"
                height="50"
              />
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default HelpSupport;
