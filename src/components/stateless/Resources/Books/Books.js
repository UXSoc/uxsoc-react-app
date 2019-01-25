import React from 'react';
import { ResourceLabel, ResourceTitle, ResourceDesc, ResourceImage } from '../ResourceCard/ResourceCard';
import { AuthorPic, AuthorName } from '../../Author/Author';
import bookCover from './../../../../resources/others/book.png';
import RedirectButton from '../../../state/RedirectButton/RedirectButton';
import donNorman from './../../../../resources/others/norman.jpg';

const Books = () => {
  return(
    <div className="Books">
      <div className="resource-content-container">
        <div className="resource-card">
          <ResourceLabel resourceLabel="Book" />
          <ResourceTitle resourceTitle="The Design of Everyday Things" />
          <AuthorPic authorPic={donNorman}/>
          <AuthorName authorName="Don Norman" />
          <ResourceDesc resourceDesc="The Design of Everyday Things is a powerful primer on how--and why--some products satisfy customers while others only frustrate them." />
          <RedirectButton idTag="resource-button" buttonText="Start Reading" redirectLink="https://drive.google.com/file/d/1vpeumY4FjJTjSJn4BROpt7WEUjyAXTfz/view?usp=sharing" />
        </div>
        <ResourceImage resourceImage={bookCover} imageWidth="540"/>
        {/* <PastResources pastResources={"/"}/> */}
      </div>
    </div>
  )
}

export default Books;
