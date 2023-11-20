import React from 'react';
import Layout from '@theme/Layout';
import Translate, { translate } from '@docusaurus/Translate';
import { MdConstruction, MdMail } from 'react-icons/md';
import styles from './styles.module.css'
import website from './website.png'

function UnderConstruction() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'top',
        marginTop: 128,
        paddingLeft: 400
      }}
    >
      <img src={website} width="307px" height="226px"></img>
      <div className="underConstructionClass" >
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

function CommunityPage() {
  return (
    <Layout title={translate({ id: 'communityPage.title' })}>
      <main>
        <UnderConstruction />
      </main>
    </Layout>
  );
}

export default CommunityPage;
