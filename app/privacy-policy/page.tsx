import { Container, Typography, Box } from "@mui/material";
import {
  StyledTypography,
  StyledNumberedList,
  StyledBulletedList,
  StyledListItem,
  StyledImage,
} from "@/components/styled-terms-and-privacy/terms-and-privacy";
import { privacyPolicyMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = privacyPolicyMetadata;

export default function page() {
  return (
    <Container disableGutters maxWidth="sm" sx={{ pt: 12 }}>
      <StyledTypography variant="h3">Privacy Policy</StyledTypography>
      <StyledTypography variant="subtitle2">
        This Privacy Policy was last updated on October 1st, 2023. Thank you for
        joining Cyfrin Updraft. We at Cyfrin Updraft (“Cyfrin Updraft”, “we”,
        “us”) respect your privacy and want you to understand how we collect,
        use, and share data about you. This Terms of Service and Privacy Policy
        covers our data collection practices and describes your rights regarding
        your personal data. Unless we link to a different policy or state
        otherwise, this Privacy Policy applies when you visit or use Cyfrin
        Updraft websites, mobile applications, APIs, or related services (the
        “Services”). By using the Services, you agree to the terms of this
        Privacy Policy. You shouldn’t use the Services if you don’t agree with
        this Privacy Policy or any other agreement that governs your use of the
        Services.
      </StyledTypography>
      <StyledTypography variant="h4">Table of Contents</StyledTypography>
      <StyledNumberedList>
        <Typography variant="subtitle2">
          <StyledListItem>What Data We Collect</StyledListItem>
          <StyledListItem>How We Collect Data</StyledListItem>
          <StyledListItem>How We Use Your Data</StyledListItem>
          <StyledListItem>Who We Share Your Data With</StyledListItem>
          <StyledListItem>Security</StyledListItem>
          <StyledListItem>User Rights</StyledListItem>
          <StyledListItem>Jurisdiction-Specific Rules</StyledListItem>
          <StyledListItem>Updates & Contact info</StyledListItem>
        </Typography>
      </StyledNumberedList>
      <StyledTypography variant="h4">1. What Data We Collect</StyledTypography>
      <StyledTypography variant="subtitle2">
        We collect certain data from you directly, like information you enter
        yourself, data about your consumption of content, and data from
        third-party platforms you connect with Cyfrin Updraft. We also collect
        some data automatically, like information about your device and what
        parts of our Services you interact with or spend time using. All data
        listed in this section is subject to the following processing
        activities: collecting, recording, structuring, storing, altering,
        retrieving, encrypting, anonymizing, erasing, combining, and
        transmitting.
      </StyledTypography>
      <StyledTypography variant="h5">
        1.1 Data You Provide to Us
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        We may collect different data from or about you depending on how you use
        the Services. Below are some examples to help you better understand the
        data we collect. When you create an account and use the Services,
        including through a third-party platform, we collect any data you
        provide directly, including:
      </StyledTypography>
      <Box sx={{ display: "flex", flexDirection: "column", paddingX: 14 }}>
        <StyledImage variant="square" src="/privacy1.1.png" alt="privacy 1" />
        <StyledImage variant="square" src="/privacy1.2.png" alt="privacy 2" />
        <StyledImage variant="square" src="/privacy1.3.png" alt="privacy 3" />
        <StyledImage variant="square" src="/privacy1.4.png" alt="privacy 4" />
      </Box>
      <StyledTypography variant="subtitle2">
        The data listed above is stored by us and associated with your account.
      </StyledTypography>
      <StyledTypography variant="h5">
        1.2 Data We Collect through Automated Means
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        When you access the Services (including browsing content), we collect
        certain data by automated means, including:
      </StyledTypography>
      <Box sx={{ display: "flex", flexDirection: "column", paddingX: 14 }}>
        <StyledImage variant="square" src="/privacy2.1.png" alt="privacy 2.1" />
      </Box>
      <br />
      <StyledTypography variant="subtitle2">
        The data listed above is collected through the use of server log files
        and tracking technologies, as detailed in the “Cookies and Data
        Collection Tools” section below. It is stored by us and associated with
        your account.
      </StyledTypography>
      <StyledTypography variant="h4">2. How We Collect Data</StyledTypography>
      <StyledTypography variant="subtitle2">
        We use tools like cookies, web beacons, and similar tracking
        technologies to gather the data listed above. Some of these tools offer
        you the ability to opt out of data collection.
      </StyledTypography>
      <StyledTypography variant="h5">
        2.1 Cookies and Data Collection Tools
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        We use cookies, which are small text files stored by your browser, to
        collect, store, and share data about your activities across websites,
        including on Cyfrin Updraft. They allow us to remember things about your
        visits to Cyfrin Updraft, like your preferred language, and to make the
        site easier to use. To learn more about cookies, visit
        https://cookiepedia.co.uk/all-about-cookies. We may also use clear
        pixels in emails to track deliverability and open rates.
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        Cyfrin Updraft and service providers acting on our behalf (like Google
        Analytics and third-party advertisers) use server log files and
        automated data collection tools like cookies, tags, scripts, customized
        links, device or browser fingerprints, and web beacons (together, “Data
        Collection Tools“) when you access and use the Services. These Data
        Collection Tools automatically track and collect certain System Data and
        Usage Data (as detailed in Section 1) when you use the Services. In some
        cases, we tie
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        data gathered through those Data Collection Tools to other data that we
        collect as described in this Privacy Policy.
      </StyledTypography>
      <StyledTypography variant="h5">
        2.2 Why We Use Data Collection Tools
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        Cyfrin Updraft uses the following types of Data Collection Tools for the
        purposes described:
      </StyledTypography>
      <StyledBulletedList>
        <StyledListItem>
          <Typography variant="subtitle2">
            Strictly Necessary: These Data Collection Tools enable you to access
            the site, provide basic functionality (like logging in or accessing
            content), secure the site, protect against fraudulent logins, and
            detect and prevent abuse or unauthorized use of your account. These
            are required for the Services to work properly, so if you disable
            them, parts of the site will break or be unavailable.
          </Typography>
        </StyledListItem>
        <StyledListItem>
          <Typography variant="subtitle2">
            Functional: These Data Collection Tools remember data about your
            browser and your preferences, provide additional site functionality,
            customize content to be more relevant to you, and remember settings
            affecting the appearance and behavior of the Services (like your
            preferred language or volume level for video playback).
          </Typography>
        </StyledListItem>
        <StyledListItem>
          <Typography variant="subtitle2">
            Performance: These Data Collection Tools help measure and improve
            the Services by providing usage and performance data, visit counts,
            traffic sources, or where an application was downloaded from. These
            tools can help us test different versions of Cyfrin Updraft to see
            which features or content users prefer and determine which email
            messages are opened.
          </Typography>
        </StyledListItem>
        <StyledListItem>
          <Typography variant="subtitle2">
            Advertising: These Data Collection Tools are used to deliver
            relevant ads (on the site and/or other sites) based on things we
            know about you like your Usage and System Data (as detailed in
            Section 1), and things that the ad service providers know about you
            based on their tracking data. The ads can be based on your recent
            activity or activity over time and across other sites and services.
            To help deliver tailored advertising, we may provide these service
            providers with a hashed, anonymized version of your email address
            (in a non-human-readable form) and content that you share publicly
            on the Services.
          </Typography>
        </StyledListItem>
        <StyledListItem>
          <Typography variant="subtitle2">
            Social Media: These Data Collection Tools enable social media
            functionality, like sharing content with friends and networks. These
            cookies may track a user or device across other sites and build a
            profile of user interests for targeted advertising purposes.
          </Typography>
        </StyledListItem>
      </StyledBulletedList>
      <StyledTypography variant="subtitle2">
        You can set your web browser to alert you about attempts to place
        cookies on your computer, limit the types of cookies you allow, or
        refuse cookies altogether. If you do, you may not be able to use some or
        all features of the Services, and your experience
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        may be different or less functional. To learn more about managing Data
        Collection Tools, refer to Section 6.1 (Your Choices About the Use of
        Your Data) below.
      </StyledTypography>
      <StyledTypography variant="h4">3. How We Use Your Data</StyledTypography>
      <StyledTypography variant="subtitle2">
        We use your data to do things like provide our Services, communicate
        with you, troubleshoot issues, secure against fraud and abuse, improve
        and update our Services, analyze how people use our Services, serve
        personalized advertising, and as required by law or necessary for safety
        and integrity. We retain your data for as long as it is needed to serve
        the purposes for which it was collected.
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        We use the data we collect through your use of the Services to:
      </StyledTypography>
      <StyledBulletedList>
        <StyledListItem>
          <Typography variant="subtitle2">
            Provide and administer the Services, including to facilitate
            participation in educational content, issue completion certificates,
            display customized content, and facilitate communication with other
            users (Account Data; Shared Content; Learning Data; System Data;
            Usage Data; Approximate Geographic Data);
          </Typography>
        </StyledListItem>
        <StyledListItem>
          <Typography variant="subtitle2">
            Process payments to instructors and other third parties (Student
            Payment Data; Instructor Payment Data);
          </Typography>
        </StyledListItem>
        <StyledListItem>
          <Typography variant="subtitle2">
            Process your requests and orders for educational content, products,
            specific services, information, or features (Account Data; Learning
            Data; Student Payment Data; System Data; Communications and
            Support);
          </Typography>
        </StyledListItem>
        <StyledListItem>
          <Typography variant="subtitle2">
            Communicate with you about your account by (Account Data; Shared
            Content; Learning Data; Sweepstakes, Promotions, and Surveys; System
            Data; Communications and Support):
          </Typography>
        </StyledListItem>
        <StyledListItem>
          <Typography variant="subtitle2">
            Responding to your questions and concerns;
          </Typography>
        </StyledListItem>
        <StyledListItem>
          <Typography variant="subtitle2">
            Sending you administrative messages and information, including
            messages from instructors, students, and teaching assistants;
            notifications about changes to our Service; and updates to our
            agreements;
          </Typography>
        </StyledListItem>
        <StyledListItem>
          <Typography variant="subtitle2">
            Sending you information, such as by email or text messages, about
            your progress in courses and related content, rewards programs, new
            services, new features, promotions, newsletters, and other available
            instructor-created content (which you can opt out of at any time);
          </Typography>
        </StyledListItem>
        <StyledListItem>
          <Typography variant="subtitle2">
            Sending push notifications to your wireless device to provide
            updates and other relevant messages (which you can manage from the
            “options” or “settings” page of the mobile app);
          </Typography>
        </StyledListItem>
        <StyledListItem>
          <Typography variant="subtitle2">
            Manage your account and account preferences and personalize your
            experience (Account Data; Learning Data; Student Payment Data;
            Instructor Payment Data; System Data, Usage Data, Cookie Data);
          </Typography>
        </StyledListItem>
        <StyledListItem>
          <Typography variant="subtitle2">
            Facilitate the Services’ technical functioning, including
            troubleshooting and resolving issues, securing the Services, and
            preventing fraud and abuse (Account Data; Student Payment Data;
            Instructor Payment Data; Communications and Support; System Data;
            Approximate Geographic Location);
          </Typography>
        </StyledListItem>
        <StyledListItem>
          <Typography variant="subtitle2">
            Verify the identity of instructors (Account Data; Instructor Payment
            Data);
          </Typography>
        </StyledListItem>
        <StyledListItem>
          <Typography variant="subtitle2">
            Solicit feedback from users (Account Data; Communications and
            Support);
          </Typography>
        </StyledListItem>
        <StyledListItem>
          <Typography variant="subtitle2">
            Market products, services, surveys, and promotions (Account Data;
            Learning Data; Sweepstakes, Promotions, and Surveys; Usage Data;
            Cookie Data);
          </Typography>
        </StyledListItem>
        <StyledListItem>
          <Typography variant="subtitle2">
            Market Subscription Plans to prospective customers (Account Data;
            Learning Data; Cookie Data);
          </Typography>
        </StyledListItem>
        <StyledListItem>
          <Typography variant="subtitle2">
            Learn more about you by linking your data with additional data
            through third-party data providers and/or analyzing the data with
            the help of analytics service providers (Account Data; Data About
            Your Accounts on Other Services; Usage Data; Cookie Data);
          </Typography>
        </StyledListItem>
        <StyledListItem>
          <Typography variant="subtitle2">
            Identify unique users across devices (Account Data; System Data;
            Cookie Data);
          </Typography>
        </StyledListItem>
        <StyledListItem>
          <Typography variant="subtitle2">
            Tailor advertisements across devices (Cookie Data);
          </Typography>
        </StyledListItem>
        <StyledListItem>
          <Typography variant="subtitle2">
            Improve our Services and develop new products, services, and
            features (all data categories);
          </Typography>
        </StyledListItem>
        <StyledListItem>
          <Typography variant="subtitle2">
            Analyze trends and traffic, track purchases, and track usage data
            (Account Data; Learning Data; Student Payment Data; Communications
            and Support; System Data; Usage Data; Approximate Geographic Data;
            Cookie Data);
          </Typography>
        </StyledListItem>
        <StyledListItem>
          <Typography variant="subtitle2">
            Advertise the Services on third-party websites and applications
            (Account Data; Cookie Data);
          </Typography>
        </StyledListItem>
        <StyledListItem>
          <Typography variant="subtitle2">
            As required or permitted by law (all data categories); or
          </Typography>
        </StyledListItem>
        <StyledListItem>
          <Typography variant="subtitle2">
            As we, in our sole discretion, otherwise determine to be necessary
            to ensure the safety or integrity of our users, employees, third
            parties, the public, or our Services (all data categories).
          </Typography>
        </StyledListItem>
      </StyledBulletedList>
      <StyledTypography variant="h4">
        4. Who We Share Your Data With
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        We share certain data about you with instructors, other students,
        companies performing services for us, Cyfrin Updraft affiliates, our
        business partners, analytics and data enrichment providers, your social
        media providers, companies helping us run promotions and surveys, and
        advertising companies who help us promote our Services. We may also
        share your data as needed for security, legal compliance, or as part of
        a corporate restructuring. Lastly, we can share data in other ways if it
        is aggregated or de-identified or if we get your consent. We may share
        your data with third parties under the following circumstances or as
        otherwise described in this Privacy Policy:
      </StyledTypography>
      <StyledBulletedList>
        <StyledListItem>
          <Typography variant="subtitle2">
            With Service Providers, Contractors, and Agents: We share your data
            with third-party companies who perform services on our behalf, like
            payment processing, fraud and abuse prevention, data analysis,
            marketing and advertising services (including retargeted
            advertising), email and hosting services, and customer services and
            support. These service providers may access your personal data and
            are required to use it solely as we direct, to provide our requested
            service. (All data categories)
          </Typography>
        </StyledListItem>
        <StyledListItem>
          <Typography variant="subtitle2">
            With Cyfrin Updraft Affiliates: We may share your data within our
            corporate family of companies that are related by common ownership
            or control to enable or support us in providing the Services. (All
            data categories)
          </Typography>
        </StyledListItem>
        <StyledListItem>
          <Typography variant="subtitle2">
            With Business Partners: We have agreements with other websites and
            platforms to distribute our Services and drive traffic to Cyfrin
            Updraft. Depending on your location, we may share your data with
            these trusted partners. (Account Data; Learning Data; Communications
            and Support; System Data)
          </Typography>
        </StyledListItem>
        <StyledListItem>
          <Typography variant="subtitle2">
            With Credit-Granting Organizations for Continuing Education: If you
            take a course to fulfill a continuing professional education
            requirement, we may share that information upon request of the
            organization granting the continuing education credit. (Account
            Data; Learning Data)
          </Typography>
        </StyledListItem>
        <StyledListItem>
          <Typography variant="subtitle2">
            With Analytics and Data Enrichment Services: As part of our use of
            third-party analytics tools like Google Analytics and data
            enrichment services like ZoomInfo, we share certain contact
            information or de-identified data. De-identified data means data
            where we’ve removed things like your name and email address and
            replaced it with a token ID. This allows these providers to provide
            analytics services or match your data with publicly-available
            database information (including contact and social information from
            other sources). We do this to communicate with you in a more
            effective and customized manner. (Account Data; System Data; Usage
            Data; Cookie Data)
          </Typography>
        </StyledListItem>
        <StyledListItem>
          <Typography variant="subtitle2">
            To Power Social Media Features: The social media features in the
            Services (like the Facebook Like button) may allow the third-party
            social media provider to collect things like your IP address and
            which page of the Services you’re visiting, and to set a cookie to
            enable the feature. Your interactions with these features are
            governed by the third-party company’s privacy policy. (System Data;
            Usage Data; Cookie Data)
          </Typography>
        </StyledListItem>
        <StyledListItem>
          <Typography variant="subtitle2">
            To Administer Promotions and Surveys: We may share your data as
            necessary to administer, market, or sponsor promotions and surveys
            you choose to participate in, as required by applicable law (like to
            provide a winners list or make required
          </Typography>
        </StyledListItem>
        <StyledListItem>
          <Typography variant="subtitle2">
            filings), or in accordance with the rules of the promotion or
            survey. (Account Data; Sweepstakes, Promotions, and Surveys)
          </Typography>
        </StyledListItem>
        <StyledListItem>
          <Typography variant="subtitle2">
            For Advertising: If we decide to use an advertising-supported
            revenue model in the future, we may use and share certain System
            Data and Usage Data with third-party advertisers and networks to
            show general demographic and preference information among our users.
            We may also allow advertisers to collect System Data through Data
            Collection Tools (as detailed in Section 2.1), to use this data to
            offer you targeted ad delivery to personalize your user experience
            (through behavioral advertising) and to undertake web analytics.
            Advertisers may also share with us the data they collect about you.
            To learn more or opt out from participating ad networks’ behavioral
            advertising, see Section 6.1 (Your Choices About the Use of Your
            Data) below. Note that if you opt out, you’ll continue to be served
            generic ads. (System Data)
          </Typography>
        </StyledListItem>
        <StyledListItem>
          <Typography variant="subtitle2">
            For Security and Legal Compliance: We may disclose your data (all
            data categories) to third parties if we (in our sole discretion)
            have a good faith belief that the disclosure is:
          </Typography>
        </StyledListItem>
        <StyledListItem>
          <Typography variant="subtitle2">
            Requested as part of a judicial, governmental, or legal inquiry,
            order, or proceeding;
          </Typography>
        </StyledListItem>
        <StyledListItem>
          <Typography variant="subtitle2">
            Reasonably necessary as part of a valid subpoena, warrant, or other
            legally-valid request;
          </Typography>
        </StyledListItem>
        <StyledListItem>
          <Typography variant="subtitle2">
            Reasonably necessary to enforce our Terms of Use, Privacy Policy,
            and other legal agreements;
          </Typography>
        </StyledListItem>
        <StyledListItem>
          <Typography variant="subtitle2">
            Required to detect, prevent, or address fraud, abuse, misuse,
            potential violations of law (or rule or regulation), or security or
            technical issues;
          </Typography>
        </StyledListItem>
        <StyledListItem>
          <Typography variant="subtitle2">
            Reasonably necessary in our discretion to protect against imminent
            harm to the rights, property, or safety of Cyfrin Updraft, our
            users, employees, members of the public, or our Services;
          </Typography>
        </StyledListItem>
        <StyledListItem>
          <Typography variant="subtitle2">
            We may also disclose data about you to our auditors and legal
            advisors in order to assess our disclosure obligations and rights
            under this Privacy Policy; or
          </Typography>
        </StyledListItem>
        <StyledListItem>
          <Typography variant="subtitle2">
            Required or permitted by law.
          </Typography>
        </StyledListItem>
        <StyledListItem>
          <Typography variant="subtitle2">
            During a Change in Control: If Cyfrin Updraft undergoes a business
            transaction like a merger, acquisition, corporate divestiture, or
            dissolution (including bankruptcy), or a sale of all or some of its
            assets, we may share, disclose, or transfer all of your data to the
            successor organization during such transition or in contemplation of
            a transition (including during due diligence). (All data categories)
          </Typography>
        </StyledListItem>
        <StyledListItem>
          <Typography variant="subtitle2">
            After Aggregation/De-identification: We may disclose or use
            aggregated or de-identified data for any purpose.
          </Typography>
        </StyledListItem>
        <StyledListItem>
          <Typography variant="subtitle2">
            With Your Permission: With your consent, we may share data to third
            parties outside the scope of this Privacy Policy. (All data
            categories)
          </Typography>
        </StyledListItem>
      </StyledBulletedList>
      <StyledTypography variant="h4">5. Security</StyledTypography>
      <StyledTypography variant="subtitle2">
        We use appropriate security based on the type and sensitivity of data
        being stored. As with any internet-enabled system, there is always a
        risk of unauthorized access, so it’s important to protect your password
        and to contact us if you suspect any unauthorized access to your
        account. Cyfrin Updraft takes appropriate security measures to protect
        against unauthorized access, alteration, disclosure, or destruction of
        your personal data that we collect and store. These measures vary based
        on the type and sensitivity of the data. Unfortunately, however, no
        system can be 100% secured, so we cannot guarantee that communications
        between you and Cyfrin Updraft, the Services, or any information
        provided to us in connection with the data we collect through the
        Services will be free from unauthorized access by third parties. Your
        password is an important part of our security system, and it is your
        responsibility to protect it. You should not share your password with
        any third party, and if you believe your password or account has been
        compromised, you should change it immediately and contact
        feedback@cyfrin.io
      </StyledTypography>
      <StyledTypography variant="h4">6. User Rights</StyledTypography>
      <StyledTypography variant="subtitle2">
        You have certain rights around the use of your data, including the
        ability to opt out of promotional emails, cookies, and collection of
        your data by certain third parties. You can update or terminate your
        account from within our Services, and can also contact us for individual
        rights requests about your personal data. Parents who believe we’ve
        unintentionally collected personal data about their underage child
        should contact us for help deleting that information.
      </StyledTypography>
      <StyledTypography variant="h5">
        6.1 Your Choices About the Use of Your Data
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        You can choose not to provide certain data to us, but you may not be
        able to use certain features of the Services.
      </StyledTypography>
      <StyledBulletedList>
        <StyledListItem>
          <Typography variant="subtitle2">
            To stop receiving promotional communications from us, you can opt
            out by using the unsubscribe mechanism in the promotional
            communication you receive or by changing the preferences in your
            account settings. Note that regardless of your email preference
            settings, we will send you transactional and relationship messages
            regarding the Services, including administrative confirmations,
            order confirmations, important updates about the Services, and
            notices about our policies.
          </Typography>
        </StyledListItem>
        <StyledListItem>
          <Typography variant="subtitle2">
            If you’re located in the European Economic Area, you may opt out of
            certain Data Collection Tools by clicking the “Cookie settings“ link
            at the bottom of any page.
          </Typography>
        </StyledListItem>
        <StyledListItem>
          <Typography variant="subtitle2">
            The browser or device you use may allow you to control cookies and
            other types of local data storage. To learn more about managing
            cookies, visit https://cookiepedia.co.uk/how-to-manage-cookies. Your
            wireless device may also allow you to control whether location or
            other data is collected and shared.
          </Typography>
        </StyledListItem>
        <StyledListItem>
          <Typography variant="subtitle2">
            To get information and control cookies used for tailored advertising
            from participating companies, see the consumer opt-out pages for the
            Network Advertising Initiative and Digital Advertising Alliance, or
            if you’re located in the European Economic Area, visit the Your
            Online Choices site. If you’re located in Japan, visit the Digital
            Advertising Consortium. To opt out of Google’s display advertising
            or customize Google Display Network ads, visit the Google Ads
            Settings page. To opt out of Taboola’s targeted ads, see the Opt-out
            Link in their Cookie Policy.
          </Typography>
        </StyledListItem>
        <StyledListItem>
          <Typography variant="subtitle2">
            To opt out of allowing Google Analytics, Mixpanel, ZoomInfo, or
            Clearbit to use your data for analytics or enrichment, see the
            Google Analytics Opt-out Browser Add-on, Mixpanel Opt-Out Cookie,
            ZoomInfo’s policy, and Clearbit data claiming mechanism.
          </Typography>
        </StyledListItem>
        <StyledListItem>
          <Typography variant="subtitle2">
            Apple iOS, Android OS, and Microsoft Windows each provide their own
            instructions on how to control in-app tailored advertising. For
            other devices and operating systems, you should review your privacy
            settings on that platform.
          </Typography>
        </StyledListItem>
      </StyledBulletedList>
      <StyledTypography variant="subtitle2">
        If you have any questions about your data, our use of it, or your
        rights, contact us at feedback@cyfrin.io
      </StyledTypography>
      <StyledTypography variant="h5">
        6.2 Accessing, Updating, and Deleting Your Personal Data
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        You can access and update your personal data that Cyfrin Updraft
        collects and maintains as follows:
      </StyledTypography>
      <StyledBulletedList>
        <StyledListItem>
          <Typography variant="subtitle2">
            To update data you provide directly, log into your account and
            update your account at any time.
          </Typography>
        </StyledListItem>
        <StyledListItem>
          <Typography variant="subtitle2">
            To terminate your account:
          </Typography>
        </StyledListItem>
        <StyledListItem>
          <Typography variant="subtitle2">
            If you are a student, visit your profile settings page
          </Typography>
        </StyledListItem>
        <StyledListItem>
          <Typography variant="subtitle2">
            If you are an instructor, please email feedback@cyfrin.io
          </Typography>
        </StyledListItem>
        <StyledListItem>
          <Typography variant="subtitle2">
            If you have any issues terminating your account, please contact our
            feedback@cyfrin.io
          </Typography>
        </StyledListItem>
        <StyledListItem>
          <Typography variant="subtitle2">
            Please note: even after your account is terminated, some or all of
            your data may still be visible to others, including without
            limitation any data that has been (a) copied, stored, or
            disseminated by other users (including comments on content); (b)
            shared or disseminated by you or others (including in your shared
            content); or (c) posted to a third-party platform. Even after your
            account is terminated, we retain your data for as long as we have a
            legitimate purpose to do so (and in accordance with applicable law),
            including to assist with legal obligations, resolve disputes, and
            enforce our agreements. We may retain and disclose such data
            pursuant to this Privacy Policy after your account has been
            terminated.
          </Typography>
        </StyledListItem>
        <StyledListItem>
          <Typography variant="subtitle2">
            To request to access, correct, or delete your personal data, you can
            submit these requests by emailing feedback@cyfrin.io.Please allow up
            to 30 days for a response. For your protection, we may require that
            the request be sent through the email address associated with your
            account, and we may need to verify your identity before implementing
            your request. Please note that we retain certain data where we have
            a lawful basis to do so, including for mandatory record-keeping and
            to complete transactions.
          </Typography>
        </StyledListItem>
      </StyledBulletedList>
      <StyledTypography variant="h5">
        6.3 Our Policy Concerning Children
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        We recognize the privacy interests of children and encourage parents and
        guardians to take an active role in their children’s online activities
        and interests. Individuals younger than 18 years of age, but of the
        required age for consent to use online services where they live (for
        example, 13 in the US or 16 in Ireland), may not set up an account, but
        may have a parent or guardian open an account and help them access
        appropriate content. Individuals younger than the required age for
        consent to use online services may not use the Services. If we learn
        that we’ve collected personal data from a child under those ages, we
        will take reasonable steps to delete it.
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        Parents who believe that Cyfrin Updraft may have collected personal data
        from a child under those ages can submit a request that it be removed to
        feedback@cyfrin.io
      </StyledTypography>
      <StyledTypography variant="h4">
        7. Jurisdiction-Specific Rules
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        If you live in California, you have certain rights related to accessing
        and deleting your data, as well as learning who we share your data with.
        If you live in Australia, you have the right to make a formal complaint
        with the appropriate government agency. Users outside of the United
        States should note that we transfer data to the US and other areas
        outside of the European Economic Area.
      </StyledTypography>
      <StyledTypography variant="h5">7.1 Users in California</StyledTypography>
      <StyledTypography variant="subtitle2">
        Users who are California residents have certain rights under the
        California Consumer Privacy Act, (“CCPA”). If you are an eligible
        California user, included in these rights are:
      </StyledTypography>
      <StyledBulletedList>
        <StyledListItem>
          <Typography variant="subtitle2">
            “Right to Know” — You have the right to request to know more about
            the categories and specific pieces of personal information that we
            have collected about you and access a copy of your personal
            information.
          </Typography>
        </StyledListItem>
        <StyledListItem>
          <Typography variant="subtitle2">
            “Right to Correction” — You have the right to have inaccurate
            personal information about you corrected.
          </Typography>
        </StyledListItem>
        <StyledListItem>
          <Typography variant="subtitle2">
            “Right to Deletion” — You have the right to request deletion of
            personal information that we have collected about you.
          </Typography>
        </StyledListItem>
        <StyledListItem>
          <Typography variant="subtitle2">
            “Right to Non-Discrimination” — If you choose to exercise any of
            your rights under CCPA, Cyfrin Updraft will treat you like all other
            users. In other words, there is no penalty for exercising your
            rights under CCPA.
          </Typography>
        </StyledListItem>
        <StyledListItem>
          <Typography variant="subtitle2">
            “Right to Opt-Out” - You have the right to opt out of the sale of
            your personal information.
          </Typography>
        </StyledListItem>
      </StyledBulletedList>
      <StyledTypography variant="subtitle2">
        CCPA has a specific definition of a “sale” and while Cyfrin Updraft does
        not, in the traditional sense, sell your personal information or the
        personal information of any of our users, we do use cookies that make
        non-personally identifiable information available to select
        third-parties. To opt out of such a “sale,” click on the “Do Not Sell My
        Personal Information” link at the bottom of this page.
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        To exercise any of these rights under CCPA, please email
        feedback@cyfrin.io CCPA allows you to designate an authorized agent to
        make these requests on your behalf. For your protection, we may require
        that the request be sent through the email address associated with your
        account, and we may need to verify you and/or your agent’s identity
        before fulfilling your request.
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        Additionally, for more information about the personal information we
        collect and how we collect it, please see the sections above entitled
        “What Data We Get” and “How We Get Data About You.”
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        To learn about the business and commercial purposes for which your
        personal information is collected and the categories of service
        providers who have access to your personal information, please see the
        sections above entitled “What We Use Your Data For” and “Who We Share
        Your Data With.” As a California resident, you also have the right to
        request certain details about what personal information we share with
        third parties for those third parties’ direct marketing purposes. To
        submit your request, send an email to feedback@cyfrin.io with the phrase
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        “California Shine the Light” and include your mailing address, state of
        residence, and email address. Since there is no widely accepted standard
        for the browser-initiated Do Not Track signal, we do not currently
        recognize or respond to Do Not Track signals.
      </StyledTypography>
      <StyledTypography variant="h5">7.2 Users in Nevada</StyledTypography>
      <StyledTypography variant="subtitle2">
        Cyfrin Updraft does not sell its users’ personal information or personal
        data. Nonetheless, Nevada residents have the right to submit a request
        that we do not sell your covered personal information, which you can do
        by emailing feedback@cyfrin.io
      </StyledTypography>
      <StyledTypography variant="h5">7.3 Users in Australia</StyledTypography>
      <StyledTypography variant="subtitle2">
        If you are an Australia resident and you have a complaint, you may refer
        it to the office of the Australian Information Commissioner (“OAIC”).
        You can contact OAIC by visiting www.oaic.gov.au; forwarding an email to
        enquiries@oaic.gov.au; telephoning 1300 363 992; or writing to OAIC at
        GPO Box 5218, Sydney NSW 2001. You may contact our privacy team at
        feedback@cyfrin.io to make a complaint about a breach of the Australian
        Privacy Principles which will be responded to within 30 days.
      </StyledTypography>
      <StyledTypography variant="h5">
        7.4 Users in the European Economic Area (“EEA”) and United Kingdom
        (“UK”)
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        If you are located in the EEA or UK, you have the right to request
        access to your data in a portable format and to request the
        rectification, erasure, restriction of processing, or objection to
        processing of your personal data. You also have the right to obtain a
        free copy of the Standard Contractual Clauses referenced in Section 7.5.
        You may use the information in Section 6.2 to submit your request.
        Additionally, if you are located in the EEA, UK, or Switzerland, you
        also have the right to lodge a complaint with your supervisory
        authority.
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        Personal data is also processed outside of the UK, Switzerland, and the
        EEA by our Cyfrin Updraft group companies, or our service providers,
        including to process transactions, facilitate payments, and provide
        support services as described in Section 4. We use the
        Controller-to-Processor Standard Contractual Clauses adopted by the
        European Commission to facilitate transfers of personal data from the
        EEA to third countries and have entered into data processing agreements
        with our service providers and Cyfrin Updraft group companies to
        restrict and regulate their processing of your data. By submitting your
        data or using our Services, you consent to this transfer, storage, and
        processing by Cyfrin Updraft and its processors.
      </StyledTypography>
      <StyledTypography variant="h5">
        7.5 Users Outside of the U.S.
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        In order to provide the Services to you, we must transfer your data to
        the United States and process it there. If you are using the Services
        from outside the United States, you consent to the transfer, storage,
        and processing of your data in and to the United States or other
        countries.
      </StyledTypography>
      <StyledTypography variant="h4">
        8. Updates & Contact Info
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        When we make a material change to this policy, we’ll notify users via
        email, in-product notice, or another mechanism required by law. Changes
        become effective the day they’re posted. Please contact us via email or
        postal mail with any questions, concerns, or disputes.
      </StyledTypography>

      <StyledTypography variant="h5">
        8.1 Modifications to This Privacy Policy
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        From time to time, we may update this Privacy Policy. If we make any
        material change to it, we will notify you via email, through a
        notification posted on the Services, or as required by applicable law.
        We will also include a summary of the key changes. Unless stated
        otherwise, modifications will become effective on the day they are
        posted. As permitted by applicable law, if you continue to use the
        Services after the effective date of any change, then your access and/or
        use will be deemed an acceptance of (and agreement to follow and be
        bound by) the revised Privacy Policy. The revised Privacy Policy
        supersedes all previous Privacy Policies. 8.2 Questions If you have any
        questions, concerns, or disputes regarding our Privacy Policy, please
        feel free to contact our privacy team at feedback@cyfrin.io
      </StyledTypography>
    </Container>
  );
}
