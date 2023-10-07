import {useState} from 'react';
import { Body, Button, Card, Content, Drawer, LogoutButton, MusicPicture } from "../../style/components";
import { Avatar, Header, Main } from "../../style/header";
import { MyEditor } from "./parts/Editor";
import { DatePicker } from "react-rainbow-components";
import {Editor, EditorState} from 'draft-js';

export default function Home() {
  const [editorState, setEditorState] = useState(() =>
  EditorState.createEmpty(),
);

  return (
    <Body>
      <Drawer>
        <div className="up-front">
          <span className="logo">
            <h4>The LMAM</h4>
          </span>
          <ul className="menu">
            <li>Home</li>
            <li>Attendance</li>
            <li>ChoralTunez</li>
            <li>Lyrics</li>
            <li>Music</li>
          </ul>
        </div>
        <LogoutButton>Logout</LogoutButton>
      </Drawer>
      <Main>
        <Header>
          <span className="search-console">
            <input type="text" className="search" name="search" id="search" placeholder="Type of search" />
          </span>
          <span className="profile">
            <Avatar style={{ backgroundImage: 'url(/src/assets/face-avatar.jpg)' }} />
          </span>
        </Header>
        <Content>
          <div className="post-section">
            <Card className='extra-padding'>
              <h4>Create Announcement</h4>
              <form action="">
                {/* <textarea name="" id="" cols="30" rows="5"></textarea> */}
                {/* <Editor placeholder="What's the Announcement ?" editorState={editorState} onChange={setEditorState} /> */}
                <MyEditor />
                <div className="next-step">
                  <div className="config">
                    <select name="announcment_type" id="">
                      <option value="">Type</option>
                      <option value="">Once</option>
                      <option value="">Weekly</option>
                      <option value="">Monthly</option>
                      <option value="">Annually</option>
                    </select>
                    <DatePicker
                    formatStyle='small'
                    placeholder='Schedule Time'
                    icon={<></>}
                     />
                    {/* <input placeholder='Schedule Time' type="datetime-local" name="" id="" /> */}
                  </div>
                  <Button>Publish</Button>
                </div>
              </form>
            </Card>
            <Card>
              <div className="post-header">
                <div className="post-profile">
                  <Avatar style={{ backgroundImage: 'url(/src/assets/face-avatar.jpg)' }} />
                  <span>
                    <h5>David George</h5>
                    <small>12 min Ago</small>
                  </span>
                </div>
                <div className="schedule">
                <Button className="schedule-color">Sunday, September 8</Button>
                <Button className="type-color">Weekly</Button>
                </div>
              </div>
              <div className="post">
                <h4>A Get Together Tommorrow</h4>
                <p>There will be a get together as an end of the year party celebration.</p>
              </div>
            </Card>
          </div>
          <div className="point-section">
            <Card>
              <h5 className='sdh5'>Rehearsal Schedule Songs</h5>
              <div className="music-post">
                <MusicPicture style={{ backgroundImage: 'url(/src/assets/face-avatar.jpg)' }} />
                <span>
                  <h5>God is Faithful</h5>
                  <small>Song by Israel Houghton & New Breed</small>
                  <a href="#">See More</a>
                </span>
              </div>
              <div className="music-post">
                <MusicPicture style={{ backgroundImage: 'url(/src/assets/face-avatar.jpg)' }} />
                <span>
                  <h5>God is Faithful</h5>
                  <small>Song by Israel Houghton & New Breed</small>
                  <a href="#">See More</a>
                </span>
              </div>
              <a href="#"><small>View All</small></a>
            </Card>
          </div>
        </Content>
      </Main>
    </ Body>
  )
}
