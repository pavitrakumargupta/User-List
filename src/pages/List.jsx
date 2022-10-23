import React,{useState,useEffect} from "react"; 
import  'bootstrap/dist/css/bootstrap.min.css';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import axios from 'axios';
import Loader from "../assets/loader.gif"
const App=()=>{
    const listColor=['danger','primary','secondary','success','warning','info','light','danger','primary','secondary']
    const imageAdresses=['https://user-images.githubusercontent.com/5709133/50445980-88299a80-0912-11e9-962a-6fd92fd18027.png','https://wilcity.com/wp-content/uploads/2019/02/avataaars.png','https://user-images.githubusercontent.com/1954752/120525494-2b195500-c3a6-11eb-9b00-ad81434be18d.png','https://avatars.githubusercontent.com/u/4601177?v=4','https://image.pngaaa.com/743/6496743-middle.png','https://cdn4.vectorstock.com/i/thumb-large/72/73/developer-icon-defi-related-vector-41827273.jpg','https://cdn3.vectorstock.com/i/thumb-large/76/57/portrait-young-bearded-man-in-eyeglasses-vector-34397657.jpg','https://image.emojipng.com/249/10341249.jpg','https://cdn5.vectorstock.com/i/1000x1000/46/59/programmer-icon-in-flat-style-isolated-on-white-vector-14324659.jpg','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAo7G-DqIYk_ajD8ar2tmRhoFXCybSbdmzGA&usqp=CAU']
    const [detail,setdetail]=useState()
    const [currrentDetail,setCurrentDetail]=useState()
    useEffect(()=>{
        const fetchdetail=async ()=>{
            const getdata=await axios.get(` https://602e7c2c4410730017c50b9d.mockapi.io/users`)
            // console.log(await getdata.status);
            await setdetail(await getdata.data)
        }
        fetchdetail()
        // setCurrentDetail( detail[0])
    },[])

    const display_details=()=>{
        
        return <div style={{ "gap":"2px", "marginTop":"6%"}} className="list-group">  {detail.map((key)=>{
            return <p href="g" onClick={()=>{setCurrentDetail(key)}}  style={{ "paddingLeft":"5%","border-radius":"10px",}} className= {"list-group-item list-group-item-action list-group-item-"+listColor[key.id-1]}>{key.profile.firstName} {key.profile.lastName}</p>
        })}
        </div>
    }
 
    const display_info=()=>{
         return (
    <section className="vh-100" >
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol   className="mb-4 mb-lg-0">
            <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
              <MDBRow className="g-0">
                <MDBCol md="4" className="gradient-custom text-center text-white"
                  style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                  <MDBCardImage  src={imageAdresses[currrentDetail.id-1]}
                    alt="Avatar" className="my-5" style={{ "borderRadius":"50px","width": '80px' }} fluid />
                  <MDBTypography tag="h5">{currrentDetail.profile.username}</MDBTypography>
                  <MDBCardText>{currrentDetail.jobTitle}</MDBCardText>
                  <MDBIcon far icon="edit mb-5" />
                </MDBCol>
                <MDBCol md="8">
                  <MDBCardBody className="p-4">
                    <MDBRow className="pt-1">
                      <MDBCol size="12" className="mb-3">
                        <MDBTypography tag="h6">Full Name</MDBTypography>
                        <MDBCardText className="text-muted">{currrentDetail.profile.firstName} {currrentDetail.profile.lastName}</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <MDBRow className="pt-1">
                      <MDBCol size="12" className="mb-3">
                        <MDBTypography tag="h6">Email</MDBTypography>
                        <MDBCardText className="text-muted">{currrentDetail.profile.email}</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                    <MDBCol size="12" className="mb-3">
                        <MDBTypography tag="h6">Bio</MDBTypography>
                        <MDBCardText className="text-muted">{currrentDetail.Bio}</MDBCardText>
                      </MDBCol>
                    </MDBRow>

                    <div className="d-flex justify-content-start">
                      <a href="#!"><MDBIcon fab icon="facebook me-3" size="lg" /></a>
                      <a href="#!"><MDBIcon fab icon="twitter me-3" size="lg" /></a>
                      <a href="#!"><MDBIcon fab icon="instagram me-3" size="lg" /></a>
                    </div>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
    }
    

    return <div style={{"display":"flex","gap":"10vw","justifyContent":"center","alignItems":"center"}}>
        <div style={{"marginTop":"1%"}} >
            <div style={{"width":"40vw","paddingLeft":"25%","border-radius":"10px","backgroundColor":"#C5DFFF"}}> 
                <h3>USERS LIST</h3>
            </div>
            
                {detail?display_details():<><img src={Loader} alt="" srcset="" /></>}
             
        </div>
            {currrentDetail?display_info():<></>}
    </div>
}

export default App