import { Container, Typography } from "@mui/material";
import {
  StyledTypography,
  StyledBulletedList,
  StyledListItem,
} from "@/components/styled-terms-and-privacy/terms-and-privacy";
import { termsAndConditionsMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = termsAndConditionsMetadata;

export default function page() {
  return (
    <Container disableGutters maxWidth="sm" sx={{ pt: 12 }}>
      <StyledTypography variant="h4">Introduction</StyledTypography>
      <StyledTypography variant="subtitle2">
        These Terms govern
      </StyledTypography>
      <StyledBulletedList>
        <StyledListItem>
          <Typography variant="subtitle2">
            the use of this Application, and,
          </Typography>
        </StyledListItem>
        <StyledListItem>
          <Typography variant="subtitle2">
            any other related Agreement or legal relationship with the Owner
          </Typography>
        </StyledListItem>
      </StyledBulletedList>
      <StyledTypography variant="subtitle2">
        in a legally binding way. Capitalized words are defined in the relevant
        dedicated section of this document.
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        The User must read this document carefully.
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        This Application is provided by:
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        Cyfrin Inc., 9066 CASCADA WAY APT 102 NAPLES, FL. 34114-644 UN
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        <strong>Owner contact email:</strong> support@cyfrin.io
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        "This Application" refers to
      </StyledTypography>
      <StyledBulletedList>
        <StyledListItem>
          <Typography variant="subtitle2">
            this website, including its subdomains and any other website through
            which the Owner makes its Service available;
          </Typography>
        </StyledListItem>
      </StyledBulletedList>
      <StyledTypography variant="h4">
        What the User should know at a glance
      </StyledTypography>
      <StyledBulletedList>
        <StyledListItem>
          <Typography variant="subtitle2">
            Usage of this Application and the Service is age-restricted, as
            detailed in the relevant section of this document.
          </Typography>
        </StyledListItem>
      </StyledBulletedList>
      <StyledTypography variant="h4">TERMS OF USE</StyledTypography>
      <StyledTypography variant="subtitle2">
        Unless otherwise specified, the terms of use detailed in this section
        apply generally when using this Application.
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        Single or additional conditions of use or access may apply in specific
        scenarios and in such cases are additionally indicated within this
        document.
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        By using this Application, Users confirm to meet the following
        requirements:
      </StyledTypography>
      <StyledBulletedList>
        <StyledListItem>
          <Typography variant="subtitle2">
            There are no restrictions for Users in terms of being Consumers or
            Business Users;
          </Typography>
        </StyledListItem>
        <StyledListItem>
          <Typography variant="subtitle2">
            Users must be older than 13;
          </Typography>
        </StyledListItem>
        <StyledListItem>
          <Typography variant="subtitle2">
            Users aren’t located in a country that is subject to a U.S.
            government embargo, or that has been designated by the U.S.
            government as a “terrorist-supporting” country;
          </Typography>
        </StyledListItem>
        <StyledListItem>
          <Typography variant="subtitle2">
            Users aren’t listed on any U.S. government list of prohibited or
            restricted parties;
          </Typography>
        </StyledListItem>
      </StyledBulletedList>
      <StyledTypography variant="h5">Account registration</StyledTypography>
      <StyledTypography variant="subtitle2">
        To use the Service Users must register or create a User account,
        providing all required data or information in a complete and truthful
        manner.
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        Users are responsible for keeping their login credentials confidential
        and safe. For this reason, Users are also required to choose passwords
        that meet the highest standards of strength permitted by this
        Application.
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        By registering, Users agree to be fully responsible for all activities
        that occur under their username and password.
        <br /> Users are required to immediately and unambiguously inform the
        Owner via the contact details indicated in this document, if they think
        their personal information, including but not limited to User accounts,
        access credentials or personal data, have been violated, unduly
        disclosed or stolen.
      </StyledTypography>
      <StyledTypography variant="h6" fontWeight={600}>
        Conditions for account registration
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        Registration of User accounts on this Application is subject to the
        conditions outlined below. By registering, Users agree to meet such
        conditions.
      </StyledTypography>
      <StyledBulletedList>
        <StyledListItem>
          <StyledTypography variant="subtitle2">
            Accounts registered by bots or any other automated methods are not
            permitted.
          </StyledTypography>
        </StyledListItem>
        <StyledListItem>
          <StyledTypography variant="subtitle2">
            Unless otherwise specified, each User must register only one
            account.
          </StyledTypography>
        </StyledListItem>
        <StyledListItem>
          <StyledTypography variant="subtitle2">
            Unless explicitly permitted, a User account may not be shared with
            other persons.
          </StyledTypography>
        </StyledListItem>
      </StyledBulletedList>
      <StyledTypography variant="h6" fontWeight={600}>
        Account termination
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        Users can terminate their account and stop using the Service at any time
        by doing the following:
      </StyledTypography>
      <StyledBulletedList>
        <StyledListItem>
          <StyledTypography variant="subtitle2">
            By directly contacting the Owner at the contact details provided in
            this document.
          </StyledTypography>
        </StyledListItem>
      </StyledBulletedList>
      <StyledTypography variant="h6" fontWeight={600}>
        Account suspension and deletion
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        The Owner reserves the right, at its sole discretion, to suspend or
        delete at any time and without notice, User accounts that it deems
        inappropriate, offensive or in violation of these Terms.
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        The suspension or deletion of User accounts shall not entitle Users to
        any claims for compensation, damages or reimbursement.
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        The suspension or deletion of accounts due to causes attributable to the
        User does not exempt the User from paying any applicable fees or prices.
      </StyledTypography>
      <StyledTypography variant="h5">
        Content on this Application
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        Unless where otherwise specified or clearly recognizable, all content
        available on this Application is owned or provided by the Owner or its
        licensors.
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        The Owner undertakes its utmost effort to ensure that the content
        provided on this Application infringes no applicable legal provisions or
        third-party rights. However, it may not always be possible to achieve
        such a result.
        <br />
        In such cases, without prejudice to any legal prerogatives of Users to
        enforce their rights, Users are kindly asked to preferably report
        related complaints using the contact details provided in this document.
      </StyledTypography>
      <StyledTypography variant="h6" fontWeight={600}>
        Rights regarding content on this Application - All rights reserved
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        The Owner holds and reserves all intellectual property rights for any
        such content.
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        Users may not, therefore, use such content in any way that is not
        necessary or implicit in the proper use of the Service.
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        In particular, but without limitation, Users may not copy, download,
        share (beyond the limits set forth below), modify, translate, transform,
        publish, transmit, sell, sublicense, edit, transfer/assign to third
        parties or create derivative works from the content available on this
        Application, nor allow any third party to do so through the User or
        their device, even without the User's knowledge.
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        Where explicitly stated on this Application, the User may download, copy
        and/or share some content available through this Application for its
        sole personal and non-commercial use and provided that the copyright
        attributions and all the other attributions requested by the Owner are
        correctly implemented.
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        Any applicable statutory limitation or exception to copyright shall stay
        unaffected.
      </StyledTypography>
      <StyledTypography variant="h5">
        Access to external resources
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        Through this Application Users may have access to external resources
        provided by third parties. Users acknowledge and accept that the Owner
        has no control over such resources and is therefore not responsible for
        their content and availability.
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        Conditions applicable to any resources provided by third parties,
        including those applicable to any possible grant of rights in content,
        result from each such third parties’ terms and conditions or, in the
        absence of those, applicable statutory law.
      </StyledTypography>
      <StyledTypography variant="h5">Acceptable use</StyledTypography>
      <StyledTypography variant="subtitle2">
        his Application and the Service may only be used within the scope of
        what they are provided for, under these Terms and applicable law.
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        Users are solely responsible for making sure that their use of this
        Application and/or the Service violates no applicable law, regulations
        or third-party rights.
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        Therefore, <strong>the Owner </strong>reserves the right to take any
        appropriate measure to protect its legitimate interests including by
        denying Users access to this Application or the Service, terminating
        contracts, reporting any misconduct performed through this Application
        or the Service to the competent authorities – such as judicial or
        administrative authorities - whenever Users engage or are suspected to
        engage in any of the following activities:
      </StyledTypography>
      <StyledBulletedList>
        <StyledListItem>
          <Typography variant="subtitle2">
            violate laws, regulations and/or these Terms;
          </Typography>
        </StyledListItem>
        <StyledListItem>
          <Typography variant="subtitle2">
            infringe any third-party rights;
          </Typography>
        </StyledListItem>

        <StyledListItem>
          <Typography variant="subtitle2">
            considerably impair the Owner’s legitimate interests;
          </Typography>
        </StyledListItem>

        <StyledListItem>
          <Typography variant="subtitle2">
            offend the Owner or any third party.
          </Typography>
        </StyledListItem>
      </StyledBulletedList>
      <StyledTypography variant="h5">Software license</StyledTypography>
      <StyledTypography variant="subtitle2">
        The software embedded in or related to this Application is provided
        under a some-rights-reserved license.
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        This means that Users are granted broad rights, including but not
        limited to the rights to use, execute, copy or distribute the software,
        to the extent determined by such license.
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        The terms of such license shall always prevail upon conflicting,
        divergent or inconsistent provisions of these Terms.
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        Users may find further information regarding the license terms in the
        relevant section of this Application.
      </StyledTypography>
      <StyledTypography variant="h5">API usage terms</StyledTypography>
      <StyledTypography variant="subtitle2">
        Users may access their data relating to this Application via the
        Application Program Interface (API). Any use of the API, including use
        of the API through a third-party product/service that accesses this
        Application, is bound by these Terms and, in addition, by the following
        specific terms:
      </StyledTypography>
      <StyledBulletedList>
        <StyledListItem>
          <StyledTypography variant="subtitle2">
            the User expressly understands and agrees that the Owner bears no
            responsibility and shall not be held liable for any damages or
            losses resulting from the User’s use of the API or their use of any
            third-party products/services that access data through the API.
          </StyledTypography>
        </StyledListItem>
      </StyledBulletedList>
      <StyledTypography variant="h4">
        TERMS AND CONDITIONS OF SALE
      </StyledTypography>
      <StyledTypography variant="h5">Paid Products</StyledTypography>
      <StyledTypography variant="subtitle2">
        Some of the Products provided on this Application, as part of the
        Service, are provided on the basis of payment.
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        The fees, duration and conditions applicable to the purchase of such
        Products are described below and in the dedicated sections of this
        Application.
      </StyledTypography>
      <StyledTypography variant="h5">Product description</StyledTypography>
      <StyledTypography variant="subtitle2">
        Prices, descriptions or availability of Products are outlined in the
        respective sections of this Application and are subject to change
        without notice.
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        While Products on this Application are presented with the greatest
        accuracy technically possible, representation on this Application
        through any means (including, as the case may be, graphic material,
        images, colors, sounds) is for reference only and implies no warranty as
        to the characteristics of the purchased Product.
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        The characteristics of the chosen Product will be outlined during the
        purchasing process.
      </StyledTypography>
      <StyledTypography variant="h5">Purchasing process</StyledTypography>
      <StyledTypography variant="subtitle2">
        Any steps taken from choosing a Product to order submission form part of
        the purchasing process.
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        The purchasing process includes these steps:
      </StyledTypography>
      <StyledBulletedList>
        <StyledListItem>
          <Typography variant="subtitle2">
            Users must choose the desired Product and verify their purchase
            selection.
          </Typography>
        </StyledListItem>
        <StyledListItem>
          <Typography variant="subtitle2">
            After having reviewed the information displayed in the purchase
            selection, Users may place the order by submitting it.
          </Typography>
        </StyledListItem>
      </StyledBulletedList>
      <StyledTypography variant="h5">Order submission</StyledTypography>
      <StyledTypography variant="subtitle2">
        When the User submits an order, the following applies:
      </StyledTypography>
      <StyledBulletedList>
        <StyledListItem>
          <Typography variant="subtitle2">
            The submission of an order determines contract conclusion and
            therefore creates for the User the obligation to pay the price,
            taxes and possible further fees and expenses, as specified on the
            order page.
          </Typography>
        </StyledListItem>
        <StyledListItem>
          <Typography variant="subtitle2">
            In case the purchased Product requires an action from the User, such
            as the provision of personal information or data, specifications or
            special wishes, the order submission creates an obligation for the
            User to cooperate accordingly.
          </Typography>
        </StyledListItem>
        <StyledListItem>
          <Typography variant="subtitle2">
            Upon submission of the order, Users will receive a receipt
            confirming that the order has been received.
          </Typography>
        </StyledListItem>
      </StyledBulletedList>
      <StyledTypography variant="subtitle2">
        All notifications related to the described purchasing process shall be
        sent to the email address provided by the User for such purposes.
      </StyledTypography>
      <StyledTypography variant="h5">Prices</StyledTypography>
      <StyledTypography variant="subtitle2">
        Users are informed during the purchasing process and before order
        submission, about any fees, taxes and costs (including, if any, delivery
        costs) that they will be charged.
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        Prices on this Application are displayed:
      </StyledTypography>
      <StyledBulletedList>
        <StyledListItem>
          <StyledTypography variant="subtitle2">
            including all applicable fees, taxes and costs.
          </StyledTypography>
        </StyledListItem>
      </StyledBulletedList>
      <StyledTypography variant="h5">Offers and discounts</StyledTypography>
      <StyledTypography variant="subtitle2">
        The Owner may offer discounts or provide special offers for the purchase
        of Products. Any such offer or discount shall always be subject to the
        eligibility criteria and the terms and conditions set out in the
        corresponding section of this Application.
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        Offers and discounts are always granted at the Owner’s sole discretion.
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        Repeated or recurring offers or discounts create no claim/title or right
        that Users may enforce in the future.
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        Depending on the case, discounts or offers shall be valid for a limited
        time only or while stocks last. If an offer or discount is limited by
        time, the time indications refer to the time zone of the Owner, as
        indicated in the Owner’s location details in this document, unless
        otherwise specified.
      </StyledTypography>
      <StyledTypography variant="h5">Methods of payment</StyledTypography>
      <StyledTypography variant="subtitle2">
        Information related to accepted payment methods is made available during
        the purchasing process.
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        Some payment methods may only be available subject to additional
        conditions or fees. In such cases related information can be found in
        the dedicated section of this Application.
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        All payments are independently processed through third-party services.
        Therefore, this Application does not collect any payment information –
        such as credit card details – but only receives a notification once the
        payment has been successfully completed. The User may read the privacy
        policy of this Application to learn more about the data processing and
        Users’ rights regarding their data.
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        If a payment through the available methods fails or is refused by the
        payment service provider, the Owner shall be under no obligation to
        fulfill the purchase order. If a payment fails or is refused, the Owner
        reserves the right to claim any related expenses or damages from the
        User.
      </StyledTypography>
      <StyledTypography variant="h5">
        Authorization for future PayPal payment
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        If Users authorize the PayPal feature which allows future purchases,
        this Application will store an identification code linked to the Users’
        PayPal account. This will authorize this Application to automatically
        process payments for future purchases or recurring installments of past
        purchases.
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        This authorization can be revoked at any time, either by contacting the
        Owner or by changing the user settings offered by PayPal.
      </StyledTypography>
      <StyledTypography variant="h5">
        Retention of Product ownership
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        Until payment of the total purchase price is received by the Owner, any
        Products ordered shall not become the User’s property.
      </StyledTypography>
      <StyledTypography variant="h5">
        Retention of usage rights
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        Users do not acquire any rights to use the purchased Product until the
        total purchase price is received by the Owner.
      </StyledTypography>
      <StyledTypography variant="h5">Delivery</StyledTypography>
      <StyledTypography variant="h6" fontWeight={600}>
        Delivery of digital content
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        Unless otherwise stated, digital content purchased on this Application
        is delivered via download on the device(s) chosen by Users.
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        Users acknowledge and accept that in order to download and/or use the
        Product, the intended device(s) may be required to meet the technical
        requirements specified on this Application.
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        Users acknowledge and accept that the ability to download the purchased
        Product may be limited in time and space.
      </StyledTypography>
      <StyledTypography variant="h6" fontWeight={600}>
        Performance of services
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        The purchased service shall be performed or made available within the
        timeframe specified on this Application or as communicated before the
        order submission.
      </StyledTypography>
      <StyledTypography variant="h5">
        Provision of personal data
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        To access or receive some of the Products provided via this Application
        as part of the Service, Users may be required to provide their personal
        data as indicated on this Application.
      </StyledTypography>
      <StyledTypography variant="h4">User rights</StyledTypography>
      <StyledTypography variant="h5">Right of withdrawal</StyledTypography>
      <StyledTypography variant="subtitle2">
        Unless exceptions apply, the User may be eligible to withdraw from the
        contract within the period specified below (generally 14 days), for any
        reason and without justification. Users can learn more about the
        withdrawal conditions within this section.
      </StyledTypography>
      <StyledTypography variant="h6" fontWeight={600}>
        The right of withdrawal does not apply on this Application
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        Users acknowledge and accept that the right of withdrawal does not apply
        to contracts concluded over this Application due to the nature of its
        offering.
      </StyledTypography>
      <StyledTypography variant="h5">UK User rights</StyledTypography>
      <StyledTypography variant="h6" fontWeight={600}>
        Right to cancel
      </StyledTypography>

      <StyledTypography variant="subtitle2">
        Unless exceptions apply, Users who are Consumers in the United Kingdom
        have a legal right of cancellation under UK law and may be eligible to
        withdraw from contracts made online (distance contracts) within the
        period specified below (generally 14 days), for any reason and without
        justification.
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        Users that do not qualify as Consumers, cannot benefit from the rights
        described in this section. Users can learn more about the cancellation
        conditions within this section.
      </StyledTypography>
      <StyledTypography variant="subtitle2" fontWeight={600}>
        The right to cancel does not apply on this Application
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        Users acknowledge and accept that the right to cancel does not apply to
        contracts concluded over this Application due to the nature of its
        offering.
      </StyledTypography>
      <StyledTypography variant="h5">Brazilian User rights</StyledTypography>
      <StyledTypography variant="h6" fontWeight={600}>
        Right of regret
      </StyledTypography>

      <StyledTypography variant="subtitle2">
        Unless an applicable exception is stated below, Users who are Consumers
        in Brazil have a legal right of regret under Brazilian law. This means
        that the Consumer has the right to withdraw from contracts made online
        (distance contracts or any contract signed away from business premises)
        within seven (7) days of the date the contract was entered into or the
        receipt of the product or service, for any reason and without
        justification. Users that do not qualify as Consumers, cannot benefit
        from the rights described in this section. The right of regret may be
        exercised by the Consumer via contact channels listed at the beginning
        of this document and in accordance with the guidelines in this section.
      </StyledTypography>

      <StyledTypography variant="subtitle2" fontWeight={600}>
        The right of regret does not apply on this Application
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        Users acknowledge and accept that the right of regret does not apply to
        contracts concluded over this Application due to the nature of its
        offering.
      </StyledTypography>
      <StyledTypography variant="h4">Guarantees</StyledTypography>

      <StyledTypography variant="h5">
        Legal guarantee of conformity for Digital Products under EU law
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        Under EU law, for a minimum period of 2 years from delivery or, in case
        of Digital Products supplied continuously for more than 2 years for the
        entire supply period, traders guarantee conformity of the Digital
        Products they provide to Consumers.
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        Where Users qualify as European Consumers, the legal guarantee of
        conformity applies to the Digital Products available on this Application
        in accordance with the laws of the country of their habitual residence.
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        National laws of such country may grant Users broader rights.
      </StyledTypography>
      <StyledTypography variant="h5">
        Conformity to contract for Consumers in the United Kingdom
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        Users in the United Kingdom qualifying as Consumers have a right to
        receive goods that are in conformity with the contract.
      </StyledTypography>
      <StyledTypography variant="h5">
        Legal guarantee of conformity for goods for Consumers in Brazil
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        The legal guarantee applicable to goods sold by this Application (both
        physical and digital) complies with the following terms, according to
        the Consumer Protection Code:
      </StyledTypography>
      <StyledBulletedList>
        <StyledListItem>
          <Typography variant="subtitle2">
            non-durable goods shall have a thirty-day (30 day) guarantee; and
          </Typography>
        </StyledListItem>
        <StyledListItem>
          <Typography variant="subtitle2">
            durable goods shall have a ninety-day (90 day) guarantee.
          </Typography>
        </StyledListItem>
      </StyledBulletedList>
      <StyledTypography variant="subtitle2">
        The warranty period starts from the date of goods delivery.
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        The warranty is not applicable in cases of misuse, natural events or if
        it has been subjected to any maintenance other than that provided by
        this Application.
        <br />
        The warranty may be claimed through the contact channels provided by
        this Application. The Owner shall bear the costs of shipping the goods
        for technical assessment, if necessary. <br />
        The Owner, at its own discretion, may also offer a contractual warranty
        in addition to the legal warranty. The regulations applicable to
        contractual warranties can be found in the specifications provided by
        this Application. If no such information is provided, only the statutory
        provisions shall apply.
      </StyledTypography>
      <StyledTypography variant="h5">
        Legal guarantee of conformity for services for Consumers in Brazil
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        The legal guarantee applicable to services sold by this Application
        complies with the following terms, according to the Consumer Protection
        Code:
      </StyledTypography>
      <StyledBulletedList>
        <StyledListItem>
          <Typography variant="subtitle2">
            non-durable services shall have a thirty-day (30 day) guarantee; and
          </Typography>
        </StyledListItem>
        <StyledListItem>
          <Typography variant="subtitle2">
            durable services shall have a ninety-day (90 day) guarantee.
          </Typography>
        </StyledListItem>
      </StyledBulletedList>
      <StyledTypography variant="subtitle2">
        The warranty period starts from the end of the performance of services.
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        The warranty is not applicable in cases of service misuse, natural
        events or if it has been subjected to any maintenance other than that
        provided by this Application.
        <br />
        The warranty may be claimed through the contact channels provided by
        this Application. If applicable, the Owner shall bear the costs of
        shipping any goods for technical assessment.The Owner, at its own
        discretion, may also offer a contractual warranty in addition to the
        legal warranty.
        <br />
        The regulations applicable to contractual warranties can be found in the
        specifications provided by this Application.
        <br />
        If no such information is provided, only the statutory provisions shall
        apply.
      </StyledTypography>
      <StyledTypography variant="h4">
        Liability and indemnification
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        Unless otherwise explicitly stated or agreed with Users, the Owner’s
        liability for damages in connection with the execution of the Agreement
        shall be excluded, limited and/or reduced to the maximum extent
        permitted by applicable law.
      </StyledTypography>
      <StyledTypography variant="h6" fontWeight={600}>
        Indemnification
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        The User agrees to indemnify and hold the Owner and its subsidiaries,
        affiliates, officers, directors, agents, co-branders, partners and
        employees harmless from and against any claim or demand ⁠— including but
        not limited to lawyer's fees and costs ⁠— made by any third party due to
        or in relation with any culpable violation of these Terms, third-party
        rights or statutory provisions connected to the use of the Service by
        the User or its affiliates, officers, directors, agents, co-branders,
        partners and employees to the extent allowed by applicable law.
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        The above also applies to any claims exercised by third parties
        (including but not limited to the Owner’s clients or customers) against
        the Owner related to Digital Products provided by the User such as, for
        instance, conformity claims.
      </StyledTypography>
      <StyledTypography variant="h6" fontWeight={600}>
        Limitation of liability
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        Unless otherwise explicitly stated and without prejudice to applicable
        law, Users shall have no right to claim damages against the Owner (or
        any natural or legal person acting on its behalf).
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        This does not apply to damages to life, health or physical integrity,
        damages resulting from the breach of material contractual obligations
        such as any obligation strictly necessary to achieve the purpose of the
        contract, and/or damages resulting from intent or gross negligence, as
        long as this Application has been appropriately and correctly used by
        the User.
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        Unless damages have been caused by way of intent or gross negligence, or
        they affect life, health or physical integrity, the Owner shall only be
        liable to the extent of typical and foreseeable damages at the moment
        the contract was entered into.
      </StyledTypography>
      <StyledTypography variant="h5">US Users</StyledTypography>
      <StyledTypography variant="h6" fontWeight={600}>
        Disclaimer of Warranties
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        This Application is provided strictly on an “as is” and “as available”
        basis. Use of the Service is at Users’ own risk. To the maximum extent
        permitted by applicable law, the Owner expressly disclaims all
        conditions, representations, and warranties — whether express, implied,
        statutory or otherwise, including, but not limited to, any implied
        warranty of merchantability, fitness for a particular purpose, or
        non-infringement of third-party rights. No advice or information,
        whether oral or written, obtained by the User from the Owner or through
        the Service will create any warranty not expressly stated herein.
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        Without limiting the foregoing, the Owner, its subsidiaries, affiliates,
        licensors, officers, directors, agents, co-branders, partners, suppliers
        and employees do not warrant that the content is accurate, reliable or
        correct; that the Service will meet Users’ requirements; that the
        Service will be available at any particular time or location,
        uninterrupted or secure; that any defects or errors will be corrected;
        or that the Service is free of viruses or other harmful components. Any
        content downloaded or otherwise obtained through the use of the Service
        is downloaded at Users' own risk and Users shall be solely responsible
        for any damage to Users’ computer system or mobile device or loss of
        data that results from such download or Users’ use of the Service.
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        The Owner does not warrant, endorse, guarantee, or assume responsibility
        for any product or service advertised or offered by a third party
        through the Service or any hyperlinked website or service, and the Owner
        shall not be a party to or in any way monitor any transaction between
        Users and third-party providers of products or services.
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        The Service may become inaccessible or it may not function properly with
        Users’ web browser, mobile device, and/or operating system. The owner
        cannot be held liable for any perceived or actual damages arising from
        Service content, operation, or use of this Service.
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        Federal law, some states, and other jurisdictions, do not allow the
        exclusion and limitations of certain implied warranties. The above
        exclusions may not apply to Users. This Agreement gives Users specific
        legal rights, and Users may also have other rights which vary from state
        to state. The disclaimers and exclusions under this agreement shall not
        apply to the extent prohibited by applicable law.
      </StyledTypography>
      <StyledTypography variant="h6" fontWeight={600}>
        Limitations of liability
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        To the maximum extent permitted by applicable law, in no event shall the
        Owner, and its subsidiaries, affiliates, officers, directors, agents,
        co-branders, partners, suppliers and employees be liable for:
      </StyledTypography>
      <StyledBulletedList>
        <StyledListItem>
          <Typography variant="subtitle2">
            any indirect, punitive, incidental, special, consequential or
            exemplary damages, including without limitation damages for loss of
            profits, goodwill, use, data or other intangible losses, arising out
            of or relating to the use of, or inability to use, the Service; and
          </Typography>
        </StyledListItem>
        <StyledListItem>
          <Typography variant="subtitle2">
            any damage, loss or injury resulting from hacking, tampering or
            other unauthorized access or use of the Service or User account or
            the information contained therein;
          </Typography>
        </StyledListItem>
        <StyledListItem>
          <Typography variant="subtitle2">
            any errors, mistakes, or inaccuracies of content;
          </Typography>
        </StyledListItem>
        <StyledListItem>
          <Typography variant="subtitle2">
            personal injury or property damage, of any nature whatsoever,
            resulting from User access to or use of the Service;
          </Typography>
        </StyledListItem>
        <StyledListItem>
          <Typography variant="subtitle2">
            any unauthorized access to or use of the Owner’s secure servers
            and/or any and all personal information stored therein;
          </Typography>
        </StyledListItem>
        <StyledListItem>
          <Typography variant="subtitle2">
            any interruption or cessation of transmission to or from the
            Service;
          </Typography>
        </StyledListItem>
        <StyledListItem>
          <Typography variant="subtitle2">
            any bugs, viruses, trojan horses, or the like that may be
            transmitted to or through the Service;
          </Typography>
        </StyledListItem>
        <StyledListItem>
          <Typography variant="subtitle2">
            any errors or omissions in any content or for any loss or damage
            incurred as a result of the use of any content posted, emailed,
            transmitted, or otherwise made available through the Service; and/or
          </Typography>
        </StyledListItem>
        <StyledListItem>
          <Typography variant="subtitle2">
            the defamatory, offensive, or illegal conduct of any User or third
            party.
          </Typography>
        </StyledListItem>
      </StyledBulletedList>
      <StyledTypography variant="subtitle2">
        In no event shall the Owner, and its subsidiaries, affiliates, officers,
        directors, agents, co-branders, partners, suppliers and employees be
        liable for any claims, proceedings, liabilities, obligations, damages,
        losses or costs in an amount exceeding the amount paid by User to the
        Owner hereunder in the preceding 12 months, or the period of duration of
        this agreement between the Owner and User, whichever is shorter.
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        This limitation of liability section shall apply to the fullest extent
        permitted by law in the applicable jurisdiction whether the alleged
        liability is based on contract, tort, negligence, strict liability, or
        any other basis, even if the User has been advised of the possibility of
        such damage.
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        Some jurisdictions do not allow the exclusion or limitation of
        incidental or consequential damages, therefore the above limitations or
        exclusions may not apply to the User. The terms give User specific legal
        rights, and User may also have other rights which vary from jurisdiction
        to jurisdiction. The disclaimers, exclusions, and limitations of
        liability under the terms shall not apply to the extent prohibited by
        applicable law.
      </StyledTypography>
      <StyledTypography variant="h6" fontWeight={600}>
        Indemnification
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        The User agrees to defend, indemnify and hold the Owner and its
        subsidiaries, affiliates, officers, directors, agents, co-branders,
        partners, suppliers and employees harmless from and against any and all
        claims or demands, damages, obligations, losses, liabilities, costs or
        debt, and expenses, including, but not limited to, legal fees and
        expenses, arising from
      </StyledTypography>
      <StyledBulletedList>
        <StyledListItem>
          <Typography variant="subtitle2">
            User’s use of and access to the Service, including any data or
            content transmitted or received by User;
          </Typography>
        </StyledListItem>
        <StyledListItem>
          <Typography variant="subtitle2">
            User’s violation of these terms, including, but not limited to,
            User’s breach of any of the representations and warranties set forth
            in these terms;
          </Typography>
        </StyledListItem>
        <StyledListItem>
          <Typography variant="subtitle2">
            User’s violation of any third-party rights, including, but not
            limited to, any right of privacy or intellectual property rights;
          </Typography>
        </StyledListItem>
        <StyledListItem>
          <Typography variant="subtitle2">
            User’s violation of any statutory law, rule, or regulation;
          </Typography>
        </StyledListItem>
        <StyledListItem>
          <Typography variant="subtitle2">
            any content that is submitted from User’s account, including third
            party access with User’s unique username, password or other security
            measure, if applicable, including, but not limited to, misleading,
            false, or inaccurate information;
          </Typography>
        </StyledListItem>
        <StyledListItem>
          <Typography variant="subtitle2">
            User’s wilful misconduct; or
          </Typography>
        </StyledListItem>
        <StyledListItem>
          <Typography variant="subtitle2">
            statutory provision by User or its affiliates, officers, directors,
            agents, co-branders, partners, suppliers and employees to the extent
            allowed by applicable law.
          </Typography>
        </StyledListItem>
      </StyledBulletedList>
      <StyledTypography variant="h4">Common provisions</StyledTypography>
      <StyledTypography variant="h5">No Waiver</StyledTypography>
      <StyledTypography variant="subtitle2">
        The Owner’s failure to assert any right or provision under these Terms
        shall not constitute a waiver of any such right or provision. No waiver
        shall be considered a further or continuing waiver of such term or any
        other term.
      </StyledTypography>
      <StyledTypography variant="h5">Service interruption</StyledTypography>
      <StyledTypography variant="subtitle2">
        To ensure the best possible service level, the Owner reserves the right
        to interrupt the Service for maintenance, system updates or any other
        changes, informing the Users appropriately.
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        Within the limits of law, the Owner may also decide to suspend or
        discontinue the Service altogether. If the Service is discontinued, the
        Owner will cooperate with Users to enable them to withdraw personal data
        or information and will respect Users' rights relating to continued
        product use and/or compensation, as provided for by applicable law.
      </StyledTypography>

      <StyledTypography variant="subtitle2">
        Additionally, the Service might not be available due to reasons outside
        the Owner’s reasonable control, such as “force majeure” events
        (infrastructural breakdowns or blackouts etc.).
      </StyledTypography>
      <StyledTypography variant="h5">Service reselling</StyledTypography>

      <StyledTypography variant="subtitle2">
        Users may not reproduce, duplicate, copy, sell, resell or exploit any
        portion of this Application and of its Service without the Owner’s
        express prior written permission, granted either directly or through a
        legitimate reselling programme.
      </StyledTypography>
      <StyledTypography variant="h5">Privacy policy</StyledTypography>

      <StyledTypography variant="subtitle2">
        To learn more about the use of their personal data, Users may refer to
        the privacy policy of this Application.
      </StyledTypography>
      <StyledTypography variant="h5">
        Intellectual property rights
      </StyledTypography>

      <StyledTypography variant="subtitle2">
        Without prejudice to any more specific provision of these Terms, any
        intellectual property rights, such as copyrights, trademark rights,
        patent rights and design rights related to this Application are the
        exclusive property of the Owner or its licensors and are subject to the
        protection granted by applicable laws or international treaties relating
        to intellectual property.
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        All trademarks — nominal or figurative — and all other marks, trade
        names, service marks, word marks, illustrations, images, or logos
        appearing in connection with this Application are, and remain, the
        exclusive property of the Owner or its licensors and are subject to the
        protection granted by applicable laws or international treaties related
        to intellectual property.
      </StyledTypography>
      <StyledTypography variant="h5">Changes to these Terms</StyledTypography>
      <StyledTypography variant="subtitle2">
        The Owner reserves the right to amend or otherwise modify these Terms at
        any time. In such cases, the Owner will appropriately inform the User of
        these changes.
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        Such changes will only affect the relationship with the User from the
        date communicated to Users onwards.
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        <strong>
          The continued use of the Service will signify the User’s acceptance of
          the revised Terms.
        </strong>
        &nbsp; If Users do not wish to be bound by the changes, they must stop
        using the Service and may terminate the Agreement.
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        The applicable previous version will govern the relationship prior to
        the User's acceptance. The User can obtain any previous version from the
        Owner.
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        If legally required, the Owner will notify Users in advance of when the
        modified Terms will take effect.
      </StyledTypography>
      <StyledTypography variant="h5">Assignment of contract</StyledTypography>
      <StyledTypography variant="subtitle2">
        The Owner reserves the right to transfer, assign, dispose of by
        novation, or subcontract any or all rights or obligations under these
        Terms, taking the User’s legitimate interests into account.Provisions
        regarding changes of these Terms will apply accordingly.
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        Users may not assign or transfer their rights or obligations under these
        Terms in any way, without the written permission of the Owner.
      </StyledTypography>
      <StyledTypography variant="h5">Contacts</StyledTypography>
      <StyledTypography variant="subtitle2">
        All communications relating to the use of this Application must be sent
        using the contact information stated in this document.
      </StyledTypography>
      <StyledTypography variant="h5">Severability</StyledTypography>
      <StyledTypography variant="subtitle2">
        Should any provision of these Terms be deemed or become invalid or
        unenforceable under applicable law, the invalidity or unenforceability
        of such provision shall not affect the validity of the remaining
        provisions, which shall remain in full force and effect.
      </StyledTypography>
      <StyledTypography variant="h6" fontWeight={600}>
        US Users
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        Any such invalid or unenforceable provision will be interpreted,
        construed and reformed to the extent reasonably required to render it
        valid, enforceable and consistent with its original intent.These Terms
        constitute the entire Agreement between Users and the Owner with respect
        to the subject matter hereof, and supersede all other communications,
        including but not limited to all prior agreements, between the parties
        with respect to such subject matter.These Terms will be enforced to the
        fullest extent permitted by law.
      </StyledTypography>
      <StyledTypography variant="h6" fontWeight={600}>
        EU Users
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        Should any provision of these Terms be or be deemed void, invalid or
        unenforceable, the parties shall do their best to find, in an amicable
        way, an agreement on valid and enforceable provisions thereby
        substituting the void, invalid or unenforceable parts.
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        In case of failure to do so, the void, invalid or unenforceable
        provisions shall be replaced by the applicable statutory provisions, if
        so permitted or stated under the applicable law.
      </StyledTypography>

      <StyledTypography variant="subtitle2">
        Without prejudice to the above, the nullity, invalidity or impossibility
        to enforce a particular provision of these Terms shall not nullify the
        entire Agreement, unless the severed provisions are essential to the
        Agreement, or of such importance that the parties would not have entered
        into the contract if they had known that the provision would not be
        valid, or in cases where the remaining provisions would translate into
        an unacceptable hardship on any of the parties.
      </StyledTypography>
      <StyledTypography variant="h5">Governing law</StyledTypography>
      <StyledTypography variant="subtitle2">
        These Terms are governed by the law of the place where the Owner is
        based, as disclosed in the relevant section of this document, without
        regard to conflict of laws principles.
      </StyledTypography>
      <StyledTypography variant="h6" fontWeight={600}>
        Prevalence of national law
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        However, regardless of the above, if the law of the country that the
        User is located in provides for higher applicable consumer protection
        standards, such higher standards shall prevail.
      </StyledTypography>
      <StyledTypography variant="h6" fontWeight={600}>
        Exception for Consumers in Switzerland
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        If the User qualifies as a Consumer in Switzerland, Swiss law will
        apply.
      </StyledTypography>
      <StyledTypography variant="h6" fontWeight={600}>
        Exception for Consumers in Brazil
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        If the User qualifies as a Consumer in Brazil and the product and/or
        service is commercialized in Brazil, Brazilian law will apply.
      </StyledTypography>
      <StyledTypography variant="h4">Dispute resolution</StyledTypography>
      <StyledTypography variant="h5">
        Amicable dispute resolution
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        Users may bring any disputes to the Owner who will try to resolve them
        amicably.
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        While Users' right to take legal action shall always remain unaffected,
        in the event of any controversy regarding the use of this Application or
        the Service, Users are kindly asked to contact the Owner at the contact
        details provided in this document.
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        The User may submit the complaint including a brief description and if
        applicable, the details of the related order, purchase, or account, to
        the Owner’s email address specified in this document.
      </StyledTypography>
      <StyledTypography variant="subtitle2">
        The Owner will process the complaint without undue delay and within 7
        days of receiving it.
      </StyledTypography>
    </Container>
  );
}
