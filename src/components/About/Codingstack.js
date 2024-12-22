import React from "react";
import { Col, Row } from "react-bootstrap";
import { 
  SiLeetcode,
  SiHackerrank,
  SiCodechef,
  SiCodeforces,
  SiGeeksforgeeks,
} from "react-icons/si";

function Codingstack() {
  const platformLinks = [
    {
      icon: SiLeetcode,
      color: '#FFA116',
      url: 'https://leetcode.com/u/klu_2200030106/',
      name: 'LeetCode'
    },
    {
      icon: SiHackerrank,
      color: '#00EA64',
      url: 'https://www.hackerrank.com/profile/klu_2200030106',
      name: 'HackerRank'
    },
    {
      icon: SiCodechef,
      color: '#5B4638',
      url: 'https://www.codechef.com/users/kandula_rohith',
      name: 'CodeChef'
    },
    {
      icon: SiCodeforces,
      color: '#1F8ACB',
      url: 'https://codeforces.com/profile/klu__2200030106',
      name: 'CodeForces'
    },
    {
      icon: SiGeeksforgeeks,
      color: '#2F8D46',
      url: 'https://www.geeksforgeeks.org/user/klu2200030106/',
      name: 'GeeksforGeeks'
    }
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {platformLinks.map(({ icon: Icon, color, url, name }) => (
        <Col xs={4} md={2} className="tech-icons" key={name}>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
            style={{ color: 'inherit', textDecoration: 'none' }}
          >
            <Icon style={{ color: color }} />
          </a>
        </Col>
      ))}
    </Row>
  );
}

export default Codingstack;