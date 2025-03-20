export const Contact = () => {
  return (
    <section>
      <h2>Get in touch</h2>
      <p>Still want to know more? Drop us a message below:</p>

      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Your name"/>
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="your.email@example.com"/>
        </div>

        <div>
          <label htmlFor="email">WhatsApp</label>
          <input type="tel" id="tel" placeholder="+601234567" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/>
        </div>

        <div>
            <label htmlFor="role">What&apos;s on your mind?</label>
            <select id="role">
              <option value="">General</option>
              <option value="developer">Sales</option>
              <option value="designer">Partnerships</option>
              <option value="manager">Careers</option>
            </select>
        </div>

        <div>
          <label htmlFor="message">Message</label>
          <textarea id="message" placeholder="Your message here"></textarea>
        </div>

        <div>
            <label>
              <input type="checkbox"/> I agree to receive updates about SizeByte
            </label>
        </div>

        <div>
            <p>Preferred contact method:</p>
            <label>
              <input type="radio" name="contact" value="email"/> 
              Email
            </label>
            <label>
              <input type="radio" name="contact" value="phone"/>
              WhatsApp
            </label>
        </div>

        <div className="flex gap-2">
          <button type="submit" className="success">Submit</button>
          <button type="reset" className="warning">Reset</button>
        </div>
      </form>
    </section>
  )
}