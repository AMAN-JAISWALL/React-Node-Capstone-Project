export const apiURL="http://localhost:4040/"; 




{/* <div id="navMenu" className="container" style={{display: 'none'}}>
<div className="row pt-3">
    <div className="col mt-auto ml-5">
        <h4 className="orange">Menu</h4>
    </div>
    <div className="col text-right">
        <img src="https://projects.itsabacus.org/makebot/images/header/exit.png" width="50px"  />
    </div>
</div>
<div className="row">
    <div className="col">
        <ul className="navMenuList">
            <a className="navMenuItem" href="https://projects.itsabacus.org/makebot/ ">Home</a>
            <li><a className="navMenuItem" href="https://projects.itsabacus.org/makebot/courses/courseList">Courses</a></li>
            <li><a className="navMenuItem" href="https://projects.itsabacus.org/makebot/modules/moduleList">Modules</a></li>
            <li><a className="navMenuItem" href="https://projects.itsabacus.org/makebot/materials/materialsList">materials</a></li>
            <li><a className="navMenuItem" href="https://projects.itsabacus.org/makebot/adminUserDetails/purchaseOrdersList">Purchased Orders</a></li>
            <li><a className="navMenuItem" href="https://projects.itsabacus.org/makebot/users/academic_history/QWxs">Academic History</a></li>
            <li><a className="navMenuItem" href="https://projects.itsabacus.org/makebot/users/userList">Users</a></li>
            <li><a className="navMenuItem" href="https://projects.itsabacus.org/makebot/users/userProfile">My Profile</a></li>
            <li><a className="navMenuItem" href="https://projects.itsabacus.org/makebot/logout/logoutUser">Logout</a></li>
        </ul>
    </div>
</div>
</div> */}

{/* <div className="container">
                <div className="row">
                    <div className="col-sm-12 mt-3 mx-3">
                        <h1 style={{fontSize:'50px'}}  >My Profile</h1>
                    </div>
                </div>
                <div className="row mt-5 mx-5">
                    <div className="col-sm-12 px-5">
                        <h3 className="orange">Edit profile </h3>

                        <div className="row">
                            <div className="col-sm-12">
                                <div className="profileImg" style={{height: '150px', width:'150px' ,background: 'url(https://projects.itsabacus.org/makebot/images/user_profile/thumbs/1686045161-autocad-2d-and-3d-banner.jpg)',margin:'10px',backgroundRepeat:'no-repeat'}}>
                                    <form id="userImageForm" name="userImageForm" role="form" action="" enctype="multipart/form-data" method="post" >
                                    <input type="hidden" name="profile_u_id" id="profile_u_id" value="MQ==" />
                                    <div className="md-fab md-fab-small md-fab-accent hidden-print" title="Change profile image">
                                        <a id="filechageId" >
                                            <img src="https://projects.itsabacus.org/makebot/images/admin/edit.png" width="40px" alt="" />
                                        </a>

                                        <input type="file" name="uProfileFileName" id="profileImgBtn" value="" style={{display:"none"}} />
                                    </div>
                                </form>
                            </div>
                            <div className="text-danger err-msg imageError"></div>
                        </div>
                    </div>
                    <form name="update_user_details_form" id="update_user_details_form" >
                        <input type="hidden" name="user_id" id="user_id" value="MQ==" />
                        <input type="hidden" name="address_id" id="address_id" value="MQ==" />
                        <div className="row">
                            <div className="col pr-5">
                                <div className="form-group">
                                    <label for="">Role</label>
                                    <input type="text" className="form-control" role="role" id="role" disabled value="super admin"/>
                                </div>
                                <div className="form-group">
                                    <div>
                                        <label for="">First Name</label>
                                        <input type="text" className="form-control" name="first_name" id="first_name" value="aman" autocomplete="off"  data-validate-type="not-blank-alpha-num"/>
                                    </div>
                                    <div className="text-danger err-msg"></div>
                                </div>
                                <div className="form-group">
                                    <div>
                                        <label for="">Middle Name</label>
                                        <input type="text" className="form-control" name="middle_name" id="middle_name" value="" autocomplete="off"  data-validate-type="validAllType"/>
                                    </div>
                                    <div className="text-danger err-msg"></div>
                                </div>
                                <div className="form-group">
                                    <div>
                                        <label for="">Last Name</label>
                                        <input type="text" className="form-control" name="last_name" id="last_name" value="jaiswal" autocomplete="off"  data-validate-type="not-blank-alpha-num"/>
                                    </div>
                                    <div className="text-danger err-msg"></div>
                                </div>
                                <div className="form-group">
                                    <div>
                                        <label for="">Email</label>
                                        <input type="text" className="form-control" name="email" id="email" value="aj27757@gmail.com" autocomplete="off"  data-validate-type="email" readonly="readonly"/>
                                    </div>
                                    <div className="text-danger err-msg error-email"></div>
                                </div>
                                <div className="form-group">
                                    <label for="">Mobile Number</label>
                                    <input type="text" className="form-control number" name="contact_no" id="contact_no" value="9876543210" autocomplete="off"  data-validate-type="number" maxlength="10"/>
                                </div>
                            </div>
                            <div className="col pr-5">
                                <div className="form-group">
                                    <label for="">Address Line 1</label>
                                    <input type="text" className="form-control" name="address_first" id="address_first" value="" autocomplete="off" />
                                </div>
                                <div className="form-group">
                                    <label for="">Address Line 2</label>
                                    <input type="text" className="form-control" name="address_second" id="address_second" value="" autocomplete="off" />
                                </div>
                                <div className="form-group">
                                    <label for="">Country</label>
                                    <select type="text" className="form-control" name="country_id" id="country_id">
                                        <option value="101">India</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label for="">State</label>
                                    <select type="text" className="form-control" name="state_id" id="state_id">
                                        <option value="">Select State</option>
                                        <option value="1">Andaman and Nicobar Islands</option>
                                        <option selected="selected" value="2">Andhra Pradesh</option>
                                        <option value="3">Arunachal Pradesh</option>
                                        <option value="4">Assam</option>
                                        <option value="5">Bihar</option>
                                        <option value="6">Chandigarh</option>
                                        <option value="7">Chhattisgarh</option>
                                        <option value="8">Dadra and Nagar Haveli</option>
                                        <option value="9">Daman and Diu</option>
                                        <option value="10">Delhi</option>
                                        <option value="11">Goa</option>
                                        <option value="12">Gujarat</option>
                                        <option value="13">Haryana</option>
                                        <option value="14">Himachal Pradesh</option>
                                        <option value="15">Jammu and Kashmir</option>
                                        <option value="16">Jharkhand</option>
                                        <option value="17">Karnataka</option>
                                        <option value="18">Kenmore</option>
                                        <option value="19">Kerala</option>
                                        <option value="20">Lakshadweep</option>
                                        <option value="21">Madhya Pradesh</option>
                                        <option value="22">Maharashtra</option>
                                        <option value="23">Manipur</option>
                                        <option value="24">Meghalaya</option>
                                        <option value="25">Mizoram</option>
                                        <option value="26">Nagaland</option>
                                        <option value="27">Narora</option>
                                        <option value="28">Natwar</option>
                                        <option value="29">Odisha</option>
                                        <option value="30">Paschim Medinipur</option>
                                        <option value="31">Pondicherry</option>
                                        <option value="32">Punjab</option>
                                        <option value="33">Rajasthan</option>
                                        <option value="34">Sikkim</option>
                                        <option value="35">Tamil Nadu</option>
                                        <option value="36">Telangana</option>
                                        <option value="37">Tripura</option>
                                        <option value="38">Uttar Pradesh</option>
                                        <option value="39">Uttarakhand</option>
                                        <option value="40">Vaishali</option>
                                        <option value="41">West Bengal</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label for="">City</label>
                                    <select type="text" className="form-control" name="city_id" id="city_id">
                                        <option value="">Select City</option>
                                        <option value="5">Addanki</option>
                                        <option selected="selected" value="6">Adivivaram</option>
                                        <option value="7">Adoni</option>
                                        <option value="8">Aganampudi</option>
                                        <option value="9">Ajjaram</option>
                                        <option value="10">Akividu</option>
                                        <option value="11">Akkarampalle</option>
                                        <option value="12">Akkayapalle</option>
                                        <option value="13">Akkireddipalem</option>
                                        <option value="14">Alampur</option>
                                        <option value="15">Amalapuram</option>
                                        <option value="16">Amudalavalasa</option>
                                        <option value="17">Amur</option>
                                        <option value="18">Anakapalle</option>
                                        <option value="19">Anantapur</option>
                                        <option value="20">Andole</option>
                                        <option value="21">Atmakur</option>
                                        <option value="22">Attili</option>
                                        <option value="23">Avanigadda</option>
                                        <option value="24">Badepalli</option>
                                        <option value="25">Badvel</option>
                                        <option value="26">Balapur</option>
                                        <option value="27">Bandarulanka</option>
                                        <option value="28">Banganapalle</option>
                                        <option value="29">Bapatla</option>
                                        <option value="30">Bapulapadu</option>
                                        <option value="31">Belampalli</option>
                                        <option value="32">Bestavaripeta</option>
                                        <option value="33">Betamcherla</option>
                                        <option value="34">Bhattiprolu</option>
                                        <option value="35">Bhimavaram</option>
                                        <option value="36">Bhimunipatnam</option>
                                        <option value="37">Bobbili</option>
                                        <option value="38">Bombuflat</option>
                                        <option value="39">Bommuru</option>
                                        <option value="40">Bugganipalle</option>
                                        <option value="41">Challapalle</option>
                                        <option value="42">Chandur</option>
                                        <option value="43">Chatakonda</option>
                                        <option value="44">Chemmumiahpet</option>
                                        <option value="45">Chidiga</option>
                                        <option value="46">Chilakaluripet</option>
                                        <option value="47">Chimakurthy</option>
                                        <option value="48">Chinagadila</option>
                                        <option value="49">Chinagantyada</option>
                                        <option value="50">Chinnachawk</option>
                                        <option value="51">Chintalavalasa</option>
                                        <option value="52">Chipurupalle</option>
                                        <option value="53">Chirala</option>
                                        <option value="54">Chittoor</option>
                                        <option value="55">Chodavaram</option>
                                        <option value="56">Choutuppal</option>
                                        <option value="57">Chunchupalle</option>
                                        <option value="58">Cuddapah</option>
                                        <option value="59">Cumbum</option>
                                        <option value="60">Darnakal</option>
                                        <option value="61">Dasnapur</option>
                                        <option value="62">Dauleshwaram</option>
                                        <option value="63">Dharmavaram</option>
                                        <option value="64">Dhone</option>
                                        <option value="65">Dommara Nandyal</option>
                                        <option value="66">Dowlaiswaram</option>
                                        <option value="67">East Godavari Dist.</option>
                                        <option value="68">Eddumailaram</option>
                                        <option value="69">Edulapuram</option>
                                        <option value="70">Ekambara kuppam</option>
                                        <option value="71">Eluru</option>
                                        <option value="72">Enikapadu</option>
                                        <option value="73">Fakirtakya</option>
                                        <option value="74">Farrukhnagar</option>
                                        <option value="75">Gaddiannaram</option>
                                        <option value="76">Gajapathinagaram</option>
                                        <option value="77">Gajularega</option>
                                        <option value="78">Gajuvaka</option>
                                        <option value="79">Gannavaram</option>
                                        <option value="80">Garacharma</option>
                                        <option value="81">Garimellapadu</option>
                                        <option value="82">Giddalur</option>
                                        <option value="83">Godavarikhani</option>
                                        <option value="84">Gopalapatnam</option>
                                        <option value="85">Gopalur</option>
                                        <option value="86">Gorrekunta</option>
                                        <option value="87">Gudivada</option>
                                        <option value="88">Gudur</option>
                                        <option value="89">Guntakal</option>
                                        <option value="90">Guntur</option>
                                        <option value="91">Guti</option>
                                        <option value="92">Hindupur</option>
                                        <option value="93">Hukumpeta</option>
                                        <option value="94">Ichchapuram</option>
                                        <option value="95">Isnapur</option>
                                        <option value="96">Jaggayyapeta</option>
                                        <option value="97">Jallaram Kamanpur</option>
                                        <option value="98">Jammalamadugu</option>
                                        <option value="99">Jangampalli</option>
                                        <option value="100">Jarjapupeta</option>
                                        <option value="101">Kadiri</option>
                                        <option value="102">Kaikalur</option>
                                        <option value="103">Kakinada</option>
                                        <option value="104">Kallur</option>
                                        <option value="105">Kalyandurg</option>
                                        <option value="106">Kamalapuram</option>
                                        <option value="107">Kamareddi</option>
                                        <option value="108">Kanapaka</option>
                                        <option value="109">Kanigiri</option>
                                        <option value="110">Kanithi</option>
                                        <option value="111">Kankipadu</option>
                                        <option value="112">Kantabamsuguda</option>
                                        <option value="113">Kanuru</option>
                                        <option value="114">Karnul</option>
                                        <option value="115">Katheru</option>
                                        <option value="116">Kavali</option>
                                        <option value="117">Kazipet</option>
                                        <option value="118">Khanapuram Haveli</option>
                                        <option value="119">Kodar</option>
                                        <option value="120">Kollapur</option>
                                        <option value="121">Kondapalem</option>
                                        <option value="122">Kondapalle</option>
                                        <option value="123">Kondukur</option>
                                        <option value="124">Kosgi</option>
                                        <option value="125">Kothavalasa</option>
                                        <option value="126">Kottapalli</option>
                                        <option value="127">Kovur</option>
                                        <option value="128">Kovurpalle</option>
                                        <option value="129">Kovvur</option>
                                        <option value="130">Krishna</option>
                                        <option value="131">Kuppam</option>
                                        <option value="132">Kurmannapalem</option>
                                        <option value="133">Kurnool</option>
                                        <option value="134">Lakshettipet</option>
                                        <option value="135">Lalbahadur Nagar</option>
                                        <option value="136">Machavaram</option>
                                        <option value="137">Macherla</option>
                                        <option value="138">Machilipatnam</option>
                                        <option value="139">Madanapalle</option>
                                        <option value="140">Madaram</option>
                                        <option value="141">Madhuravada</option>
                                        <option value="142">Madikonda</option>
                                        <option value="143">Madugule</option>
                                        <option value="144">Mahabubnagar</option>
                                        <option value="145">Mahbubabad</option>
                                        <option value="146">Malkajgiri</option>
                                        <option value="147">Mamilapalle</option>
                                        <option value="148">Mancheral</option>
                                        <option value="149">Mandapeta</option>
                                        <option value="150">Mandasa</option>
                                        <option value="151">Mangalagiri</option>
                                        <option value="152">Manthani</option>
                                        <option value="153">Markapur</option>
                                        <option value="154">Marturu</option>
                                        <option value="155">Metpalli</option>
                                        <option value="156">Mindi</option>
                                        <option value="157">Mirpet</option>
                                        <option value="158">Moragudi</option>
                                        <option value="159">Mothugudam</option>
                                        <option value="160">Nagari</option>
                                        <option value="161">Nagireddipalle</option>
                                        <option value="162">Nandigama</option>
                                        <option value="163">Nandikotkur</option>
                                        <option value="164">Nandyal</option>
                                        <option value="165">Narasannapeta</option>
                                        <option value="166">Narasapur</option>
                                        <option value="167">Narasaraopet</option>
                                        <option value="168">Narayanavanam</option>
                                        <option value="169">Narsapur</option>
                                        <option value="170">Narsingi</option>
                                        <option value="171">Narsipatnam</option>
                                        <option value="172">Naspur</option>
                                        <option value="173">Nathayyapalem</option>
                                        <option value="174">Nayudupeta</option>
                                        <option value="175">Nelimaria</option>
                                        <option value="176">Nellore</option>
                                        <option value="177">Nidadavole</option>
                                        <option value="178">Nuzvid</option>
                                        <option value="179">Omerkhan daira</option>
                                        <option value="180">Ongole</option>
                                        <option value="181">Osmania University</option>
                                        <option value="182">Pakala</option>
                                        <option value="183">Palakole</option>
                                        <option value="184">Palakurthi</option>
                                        <option value="185">Palasa</option>
                                        <option value="186">Palempalle</option>
                                        <option value="187">Palkonda</option>
                                        <option value="188">Palmaner</option>
                                        <option value="189">Pamur</option>
                                        <option value="190">Panjim</option>
                                        <option value="191">Papampeta</option>
                                        <option value="192">Parasamba</option>
                                        <option value="193">Parvatipuram</option>
                                        <option value="194">Patancheru</option>
                                        <option value="195">Payakaraopet</option>
                                        <option value="196">Pedagantyada</option>
                                        <option value="197">Pedana</option>
                                        <option value="198">Peddapuram</option>
                                        <option value="199">Pendurthi</option>
                                        <option value="200">Penugonda</option>
                                        <option value="201">Penukonda</option>
                                        <option value="202">Phirangipuram</option>
                                        <option value="203">Pithapuram</option>
                                        <option value="204">Ponnur</option>
                                        <option value="205">Port Blair</option>
                                        <option value="206">Pothinamallayyapalem</option>
                                        <option value="207">Prakasam</option>
                                        <option value="208">Prasadampadu</option>
                                        <option value="209">Prasantinilayam</option>
                                        <option value="210">Proddatur</option>
                                        <option value="211">Pulivendla</option>
                                        <option value="212">Punganuru</option>
                                        <option value="213">Puttur</option>
                                        <option value="214">Qutubullapur</option>
                                        <option value="215">Rajahmundry</option>
                                        <option value="216">Rajamahendri</option>
                                        <option value="217">Rajampet</option>
                                        <option value="218">Rajendranagar</option>
                                        <option value="219">Rajoli</option>
                                        <option value="220">Ramachandrapuram</option>
                                        <option value="221">Ramanayyapeta</option>
                                        <option value="222">Ramapuram</option>
                                        <option value="223">Ramarajupalli</option>
                                        <option value="224">Ramavarappadu</option>
                                        <option value="225">Rameswaram</option>
                                        <option value="226">Rampachodavaram</option>
                                        <option value="227">Ravulapalam</option>
                                        <option value="228">Rayachoti</option>
                                        <option value="229">Rayadrug</option>
                                        <option value="230">Razam</option>
                                        <option value="231">Razole</option>
                                        <option value="232">Renigunta</option>
                                        <option value="233">Repalle</option>
                                        <option value="234">Rishikonda</option>
                                        <option value="235">Salur</option>
                                        <option value="236">Samalkot</option>
                                        <option value="237">Sattenapalle</option>
                                        <option value="238">Seetharampuram</option>
                                        <option value="239">Serilungampalle</option>
                                        <option value="240">Shankarampet</option>
                                        <option value="241">Shar</option>
                                        <option value="242">Singarayakonda</option>
                                        <option value="243">Sirpur</option>
                                        <option value="244">Sirsilla</option>
                                        <option value="245">Sompeta</option>
                                        <option value="246">Sriharikota</option>
                                        <option value="247">Srikakulam</option>
                                        <option value="248">Srikalahasti</option>
                                        <option value="249">Sriramnagar</option>
                                        <option value="250">Sriramsagar</option>
                                        <option value="251">Srisailam</option>
                                        <option value="252">Srisailamgudem Devasthanam</option>
                                        <option value="253">Sulurpeta</option>
                                        <option value="254">Suriapet</option>
                                        <option value="255">Suryaraopet</option>
                                        <option value="256">Tadepalle</option>
                                        <option value="257">Tadepalligudem</option>
                                        <option value="258">Tadpatri</option>
                                        <option value="259">Tallapalle</option>
                                        <option value="260">Tanuku</option>
                                        <option value="261">Tekkali</option>
                                        <option value="262">Tenali</option>
                                        <option value="263">Tigalapahad</option>
                                        <option value="264">Tiruchanur</option>
                                        <option value="265">Tirumala</option>
                                        <option value="266">Tirupati</option>
                                        <option value="267">Tirvuru</option>
                                        <option value="268">Trimulgherry</option>
                                        <option value="269">Tuni</option>
                                        <option value="270">Turangi</option>
                                        <option value="271">Ukkayapalli</option>
                                        <option value="272">Ukkunagaram</option>
                                        <option value="273">Uppal Kalan</option>
                                        <option value="274">Upper Sileru</option>
                                        <option value="275">Uravakonda</option>
                                        <option value="276">Vadlapudi</option>
                                        <option value="277">Vaparala</option>
                                        <option value="278">Vemalwada</option>
                                        <option value="279">Venkatagiri</option>
                                        <option value="280">Venkatapuram</option>
                                        <option value="281">Vepagunta</option>
                                        <option value="282">Vetapalem</option>
                                        <option value="283">Vijayapuri</option>
                                        <option value="284">Vijayapuri South</option>
                                        <option value="285">Vijayawada</option>
                                        <option value="286">Vinukonda</option>
                                        <option value="287">Visakhapatnam</option>
                                        <option value="288">Vizianagaram</option>
                                        <option value="289">Vuyyuru</option>
                                        <option value="290">Wanparti</option>
                                        <option value="291">West Godavari Dist.</option>
                                        <option value="292">Yadagirigutta</option>
                                        <option value="293">Yarada</option>
                                        <option value="294">Yellamanchili</option>
                                        <option value="295">Yemmiganur</option>
                                        <option value="296">Yenamalakudru</option>
                                        <option value="297">Yendada</option>
                                        <option value="298">Yerraguntla</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label for="">Pin Code</label>
                                    <input type="text" className="form-control" name="pin_code" id="pin_code" value="450100" autocomplete="off" />
                                </div>
                                <div className="form-group text-right">
                                    <button type="submit" name="btn_update_profile" id="btn_update_profile" className="btn btn-success">Submit</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="row mt-5 mx-5">
                <div className="col-md-6 px-5">
                    <h3 className="orange">Change password</h3>
                    <form id="umpChangePwdForm" className="" name="umpChangePwdForm"  >
                    <input type="hidden" name="u_id" id="u_id" value="MQ==" />
                    <div className="form-group">
                        <div>
                            <label for="">Old Password</label>
                            <input type="password" name="ucurrentPassword" id="ucurrentPassword" className="form-control" placeholder="Current Password" data-validate-type="no-blank" autocomplete="off" />
                        </div>
                        <div className="text-danger err-msg"></div>
                    </div>
                    <div className="form-group">
                        <div>
                            <label for="">New Password</label>
                            <input type="password" name="uPassword" id="password" className="form-control" data-validate-type="pwd" autocomplete="off"  placeholder="New Password"/>
                        </div>
                        <div className="text-danger err-msg"></div>
                    </div>
                    <div className="form-group">
                        <div>
                            <label for="">Repeat Password</label>
                            <input type="password" name="uPasswordAgain" id="uPasswordAgain" className="form-control effect-8" data-validate-type="conf-pwd" autocomplete="off"  placeholder="Re-Type Password" />
                        </div>
                    <div className="text-danger err-msg"></div>
                    </div>
                    <div className="form-group text-right">
                        <button type="submit" id="userMyProfileChangePwdBtn" name="userMyProfileChangePwdBtn" className="btn btn-success" >Submit</button>
                    </div>
                </form>
            </div>
        </div>
        </div> */}