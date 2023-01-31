import "../styles/globals.css"

export default function Projects() {
  return (
    <div>
    <div className="container">
    <div className="row">
        <a href="https://github.com/Qewertyy/cardinal-prophecy" className="card">
            <div className="card-img">
                <img src="https://res.cloudinary.com/tungu/image/upload/v1589375410/vercel-logo-icon_um9i6v.jpg" alt="card image"/>
            </div>
            <div className="card-title">Cardinal Prophecy</div>
            <div className="card-description">
                <p>A Web app written in C# to prognosticate probabilty of heart attacks.</p>
            </div>
        </a>
        <a href="https://excellent-classes.com" className="card">
            <div className="card-img">
                <img src="https://res.cloudinary.com/tungu/image/upload/v1589375410/vercel-logo-icon_um9i6v.jpg" alt="card image"/>
            </div>
            <div className="card-title">Excellent Classes</div>
            <div className="card-description">
                <p>Excellent classes website desgined & implemented by me.</p>
            </div>
        </a>
        <a href="https://fpsdojo.github.io" className="card">
            <div className="card-img">
                <img src="https://res.cloudinary.com/tungu/image/upload/v1589375410/vercel-logo-icon_um9i6v.jpg" alt="card image"/>
            </div>
            <div className="card-title">【﻿ＦＰＳ 道場】</div>
            <div className="card-description">
                <p>Co-founder of【﻿ＦＰＳ 道場】, A Frame Interpolation Project.</p>
            </div>
        </a>
    </div>
    <div className="row">
        <a href="https://github.com/Qewertyy/TimeTracker" className="card">
            <div className="card-img">
                <img src="https://res.cloudinary.com/tungu/image/upload/v1589375410/vercel-logo-icon_um9i6v.jpg" alt="card image"/>
            </div>
            <div className="card-title">Time Tracker</div>
            <div className="card-description">
                <p>A Time Tracker web app written in C#, backend as MS SQL Server. It was implemented as i was learning C#. (for practice)</p>
            </div>
        </a>
        <a href="https://github.com/Qewertyy/RollingBallGame3D" className="card">
            <div className="card-img">
                <img src="https://res.cloudinary.com/tungu/image/upload/v1589375410/vercel-logo-icon_um9i6v.jpg" alt="card image"/>
            </div>
            <div className="card-title">Rolling Ball Game</div>
            <div className="card-description">
                <p>Developed this little 3D game in unity.</p> {/*<a href="https://github.com/Qewertyy/CompiledGames/releases/tag/1.0.0">exe file</a>*/}
            </div>
        </a>
        <a href="" className="card">
            <div className="card-img">
                <img src="https://res.cloudinary.com/tungu/image/upload/v1589375410/vercel-logo-icon_um9i6v.jpg" alt="card image"/>
            </div>
            <div className="card-title">Android App</div>
            <div className="card-description">
                <p>Not much of a project but it consist of basic CRUD operation, intents, Option Menu & data trasnfer from one activity to other.</p>
            </div>
        </a>
    </div>
    </div>
    </div>
  )
}
