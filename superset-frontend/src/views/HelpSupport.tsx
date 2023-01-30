import React, { useState } from 'react';
import Icon from 'src/components/Icons/Icon';
import { useTheme } from '@superset-ui/core';

const HelpSupport = () => {
  const theme = useTheme();

  const [open, setOpen] = useState(false);
  return (
    <>
      <Icon
        iconSize="xxl"
        style={{
          position: 'fixed',
          right: '30px',
          bottom: '30px',
          fontSize: '50px',
        }}
        fileName="help_icon"
        onClick={() => {
          setOpen(!open);
        }}
      />
      {open && (
        <div
          style={{
            position: 'fixed',
            height: '400px',
            width: '350px',
            right: '70px',
            bottom: '80px',
            backgroundColor: theme.colors.primary.light7,
            border: '1px solid',
            borderRadius: '15px',
            padding: '2px 20px 5px 20px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
            }}
          >
            <h2>Help and Support</h2>
            <button
              type="button"
              style={{
                color: theme.colors.primary.light6,
                cursor: 'pointer',
                fontSize: '22px',
                padding: 0,
                border: 'none',
                background: 'none',
              }}
              onClick={() => {
                setOpen(!open);
              }}
            >
              X
            </button>
          </div>
          <hr style={{ marginTop: '-3px' }} />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'center',
              overflow: 'auto',
            }}
          >
            <iframe
              width="300"
              height="160"
              src="https://www.youtube.com/embed/VEuBZqdSoHk"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />

            <ul
              style={{
                fontSize: '16px',
                paddingTop: '3px',
              }}
            >
              <li>
                <data
                  value="DASHBOARD"
                  style={{
                    fontWeight: 'bold',
                  }}
                >
                  <a
                    href="https://superset.apache.org/docs/creating-charts-dashboards/creating-your-first-dashboard"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Create Your First DashBoard
                  </a>
                </data>
              </li>
              <li>
                <data
                  value="DATA"
                  style={{
                    fontWeight: 'bold',
                  }}
                >
                  <a
                    href="https://superset.apache.org/docs/creating-charts-dashboards/exploring-data"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Explore Data in superset
                  </a>
                </data>
              </li>
              <li>
                <data
                  value="SECURITY"
                  style={{
                    fontWeight: 'bold',
                  }}
                >
                  <a
                    href="https://superset.apache.org/docs/security"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Role Based Access Control
                  </a>
                </data>
              </li>
              <li>
                <data
                  value="FAQ"
                  style={{
                    fontWeight: 'bold',
                  }}
                >
                  <a
                    href="https://superset.apache.org/docs/frequently-asked-questions"
                    target="_blank"
                    rel="noreferrer"
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
              rel="noreferrer"
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
              rel="noreferrer"
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
              rel="noreferrer"
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
              rel="noreferrer"
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
