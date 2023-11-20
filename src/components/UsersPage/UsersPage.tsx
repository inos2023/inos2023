import React from 'react';
import Layout from '@theme/Layout';
import Translate, { translate } from '@docusaurus/Translate';
import {
  MdConstruction,
  MdWrapText,
  MdSavedSearch,
  MdSearchOff,
  MdSearch,
  MdYoutubeSearchedFor,
  MdPersonSearch,
  MdContentPasteSearch,
  MdBluetoothSearching,
  MdLocationSearching,
  MdScreenSearchDesktop,
  MdImageSearch,
  MdImagesearchRoller,
  MdManageSearch,
  MdOutlineSavedSearch,
  MdOutlineSearchOff,
  MdOutlineSearch,
  MdOutlineYoutubeSearchedFor,
  MdOutlinePersonSearch,
  MdOutlineContentPasteSearch,
  MdOutlineBluetoothSearching,
  MdOutlineLocationSearching,
  MdOutlineScreenSearchDesktop,
  MdOutlineImageSearch,
  MdOutlineImagesearchRoller,
  MdOutlineManageSearch,
} from 'react-icons/md';
import styles from './styles.module.css';
import website from './02-1缺省页.png';

function UnderConstruction() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'top',
        marginTop: 210,
        paddingLeft: 480,
      }}
    >
      <img src={website} width="307px" height="226px"></img>
      <div className="underConstructionClass">
        <div>
          <Translate id="underConstruction.text" />
        </div>
        <div>
          <Translate id="underConstruction2.text" />
        </div>
      </div>
    </div>
  );
}

function UsersPage() {
  return (
    <Layout title={translate({ id: 'usersPage.title' })}>
      <main>
        <UnderConstruction />
      </main>
    </Layout>
  );
}

export default UsersPage;
