import React from 'react';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Report from '../../Components/Report/report';
import Navigation from '../../Components/Navigation/navigation';

function Beranda() {
  return (
    <>
      <Navigation />
      <div className="home">
        <div className="homeHeader">
          <div className="left">
            <h1>ZidDesk</h1>
            <h2>PT. PESTADA (Pusat)</h2>
            <p>
              <LocationOnIcon /> Jakarta
            </p>
          </div>
          <div className="right">
            <NotificationsNoneIcon />
          </div>
        </div>
        <div className="homeFloat">
          <div className="icon">
            <div className="iconLeft">
              <span>
                <ConfirmationNumberIcon />
              </span>
              <span>
                <p>5 Ticket</p>
              </span>
              <span className="alert">
                <ErrorOutlineIcon />
              </span>
            </div>
            <div className="iconRight">
              <span>
                <HomeRepairServiceIcon />
              </span>
              <span>
                <p>3 Visit</p>
              </span>
              <span className="alert">
                <ErrorOutlineIcon />
              </span>
            </div>
          </div>
          <div className="expired">
            <p>
              Akan berakhir pada: <b>17 Agustus 2022</b>
            </p>
          </div>
        </div>
        <div className="report">
          <Report />
        </div>
        <div className="homeContent">
          <div className="titleActivity">
            <h3>Aktivitas Terbaru</h3>
            <a href="/myComplaint">Lihat Semua</a>
          </div>
          <div className="descActivity">
            <div className="descFirst">
              <h4>Keluhan</h4>
              <div className="complain">
                <span>Laptop Rusak</span>
                <span>
                  <p>Menunggu</p>
                </span>
                <span>
                  <NavigateNextIcon />
                </span>
              </div>
            </div>
            <div className="descSecond">
              <h4>Visit</h4>
              <div className="visit">
                <span>Teknisi Budi</span>
                <span>
                  <p>31 Agustus 2021</p>
                </span>
                <span>
                  <NavigateNextIcon />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Beranda;
